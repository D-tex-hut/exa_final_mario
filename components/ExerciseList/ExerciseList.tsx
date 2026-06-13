import "./ExerciseList.css";
import ExerciseListItem from "../ExerciseCard/ExerciseCard";
import ExerciseCard from "../ExerciseCard/ExerciseCard";
export default function ExerciseList() {
    const ejercicios = [
        {
            id: 1,
            name: "Puxada frontal",
            description: "3 séries x 12 repetições",
            image: "/puxada-frontal.jpg"
        },
        {
            id: 2,
            name: "Remada curvada",
            description: "3 séries x 12 repetições",
            image: "/supino-reto.jpg"
        },
        {
            id: 3,
            name: "Remada unilateral",
            description: "3 séries x 12 repetições",
            image: "/levantamento-terra.jpg"
        },
        {
            id: 4,
            name: "Levantamento terra",
            description: "3 séries x 12 repetições",
            image: "/remada-curvada.jpg"
        }
    ];
    return (
        <div className="exercise-list">
            {ejercicios.map((ejercicio) => (
                <ExerciseCard
                    key={ejercicio.id}
                    name={ejercicio.name}
                    description={ejercicio.description}
                    image={ejercicio.image}
                />
            ))}
        </div>
    );
}