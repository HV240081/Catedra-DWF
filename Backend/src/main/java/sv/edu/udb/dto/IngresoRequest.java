package sv.edu.udb.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class IngresoRequest {
    private String nombreGasto;
    private BigDecimal totalIngreso;
    private String categoria; // Name of the category (either selected or manual)
    private Boolean usarCategoriaManual; // Flag to indicate if manual category is used
}