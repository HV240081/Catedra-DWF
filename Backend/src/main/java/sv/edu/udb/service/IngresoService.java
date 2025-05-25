package sv.edu.udb.service;

import sv.edu.udb.dto.CategoriaResponse;
import sv.edu.udb.dto.IngresoEstadisticaDTO;
import sv.edu.udb.dto.IngresoRequest;
import sv.edu.udb.dto.IngresoResponse;
import sv.edu.udb.model.CategoriaIngreso;
import sv.edu.udb.model.Ingreso;
import sv.edu.udb.repository.CategoriaIngresoRepository;
import sv.edu.udb.repository.IngresoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class IngresoService {

    @Autowired
    private IngresoRepository ingresoRepository;

    @Autowired
    private CategoriaIngresoRepository categoriaIngresoRepository;

    @Transactional
    public IngresoResponse crearIngreso(IngresoRequest request) {
        CategoriaIngreso categoria;

        // Check if using manual category and if the name is provided
        if (request.getUsarCategoriaManual() != null && request.getUsarCategoriaManual()) {
            if (request.getCategoria() == null || request.getCategoria().trim().isEmpty()) {
                throw new IllegalArgumentException("El nombre de la categoría manual no puede estar vacío.");
            }
            // Try to find existing manual category, otherwise create a new one
            categoria = categoriaIngresoRepository.findByNombreCategoria(request.getCategoria().trim())
                    .orElseGet(() -> {
                        CategoriaIngreso nuevaCategoria = new CategoriaIngreso();
                        nuevaCategoria.setNombreCategoria(request.getCategoria().trim());
                        return categoriaIngresoRepository.save(nuevaCategoria);
                    });
        } else {
            // If not using manual, a category must be selected
            if (request.getCategoria() == null || request.getCategoria().trim().isEmpty()) {
                throw new IllegalArgumentException("Debe seleccionar una categoría.");
            }
            // Find the selected category
            categoria = categoriaIngresoRepository.findByNombreCategoria(request.getCategoria().trim())
                    .orElseThrow(() -> new IllegalArgumentException("La categoría seleccionada no existe."));
        }

        Ingreso ingreso = new Ingreso();
        ingreso.setNombreGasto(request.getNombreGasto());
        ingreso.setTotalIngreso(request.getTotalIngreso());
        ingreso.setCategoria(categoria); // Correctly sets the CategoriaIngreso object

        Ingreso savedIngreso = ingresoRepository.save(ingreso);
        return mapToIngresoResponse(savedIngreso);
    }

    public List<IngresoResponse> obtenerTodosLosIngresos() {
        return ingresoRepository.findAll().stream()
                .map(this::mapToIngresoResponse)
                .collect(Collectors.toList());
    }

    public List<CategoriaResponse> obtenerTodasLasCategorias() {
        return categoriaIngresoRepository.findAll().stream()
                .map(categoria -> new CategoriaResponse(categoria.getId(), categoria.getNombreCategoria()))
                .collect(Collectors.toList());
    }

    public List<IngresoEstadisticaDTO> obtenerEstadisticasIngresosPorCategoria() {
        List<Ingreso> ingresos = ingresoRepository.findAll();
        Map<String, BigDecimal> ingresosPorCategoria = ingresos.stream()
                .collect(Collectors.groupingBy(
                        ingreso -> ingreso.getCategoria().getNombreCategoria(),
                        Collectors.reducing(BigDecimal.ZERO, Ingreso::getTotalIngreso, BigDecimal::add)
                ));

        return ingresosPorCategoria.entrySet().stream()
                .map(entry -> new IngresoEstadisticaDTO(entry.getKey(), entry.getValue()))
                .collect(Collectors.toList());
    }

    private IngresoResponse mapToIngresoResponse(Ingreso ingreso) {
        return new IngresoResponse(
                ingreso.getId(),
                ingreso.getNombreGasto(),
                ingreso.getTotalIngreso(),
                ingreso.getCategoria().getNombreCategoria(), // Access the name from the CategoriaIngreso object
                ingreso.getFechaIngreso()
        );
    }
}