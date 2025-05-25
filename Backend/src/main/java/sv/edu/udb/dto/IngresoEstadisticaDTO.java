package sv.edu.udb.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class IngresoEstadisticaDTO {
    private String name; // Category name for the chart
    private BigDecimal value; // Total amount for that category for the chart
}