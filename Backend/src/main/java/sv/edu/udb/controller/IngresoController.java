package sv.edu.udb.controller;

import sv.edu.udb.dto.CategoriaResponse;
import sv.edu.udb.dto.IngresoEstadisticaDTO;
import sv.edu.udb.dto.IngresoRequest;
import sv.edu.udb.dto.IngresoResponse;
import sv.edu.udb.service.IngresoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ingresos")
public class IngresoController {

    @Autowired
    private IngresoService ingresoService;

    @PostMapping
    public ResponseEntity<IngresoResponse> crearIngreso(@RequestBody IngresoRequest request) {
        try {
            IngresoResponse nuevoIngreso = ingresoService.crearIngreso(request);
            return new ResponseEntity<>(nuevoIngreso, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity<List<IngresoResponse>> obtenerIngresos() {
        List<IngresoResponse> ingresos = ingresoService.obtenerTodosLosIngresos();
        return new ResponseEntity<>(ingresos, HttpStatus.OK);
    }

    @GetMapping("/categorias")
    public ResponseEntity<List<CategoriaResponse>> obtenerCategorias() {
        List<CategoriaResponse> categorias = ingresoService.obtenerTodasLasCategorias();
        return new ResponseEntity<>(categorias, HttpStatus.OK);
    }

    @GetMapping("/estadisticas")
    public ResponseEntity<List<IngresoEstadisticaDTO>> obtenerEstadisticasIngresos() {
        List<IngresoEstadisticaDTO> estadisticas = ingresoService.obtenerEstadisticasIngresosPorCategoria();
        return new ResponseEntity<>(estadisticas, HttpStatus.OK);
    }
}