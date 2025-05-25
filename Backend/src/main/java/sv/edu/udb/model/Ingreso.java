package sv.edu.udb.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "ingresos")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Ingreso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre_gasto", nullable = false, length = 60)
    private String nombreGasto;

    @Column(name = "total_ingreso", nullable = false, precision = 10, scale = 2)
    private BigDecimal totalIngreso;

    @ManyToOne
    @JoinColumn(name = "id_categoria", nullable = false)
    private CategoriaIngreso categoria; // This field name must match the setter/getter

    @Column(name = "fecha_ingreso", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime fechaIngreso;

    @PrePersist
    protected void onCreate() {
        if (fechaIngreso == null) {
            fechaIngreso = LocalDateTime.now();
        }
    }
}