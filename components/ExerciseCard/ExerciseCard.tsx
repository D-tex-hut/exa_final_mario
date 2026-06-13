import "./ExerciseCard.css";
interface Props {
  name: string;
  description: string;
  image: string;
}
export default function ExerciseCard({ name, description, image }: Props) {
    return (
        <div className="card">
            <img src={image} alt={name}/>
            <div className="info">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <span className="arrow"></span>
        </div>
    );
}
