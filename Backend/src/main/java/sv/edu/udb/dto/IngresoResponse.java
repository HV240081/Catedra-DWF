package sv.edu.udb.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class IngresoResponse {
    private Long id;
    private String nombreGasto;
    private BigDecimal totalIngreso;
    private String categoria;
    private LocalDateTime fechaIngreso;
}