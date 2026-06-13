import Header from "../components/Header/Header";
import ExerciseCard from "../components/ExerciseCard/ExerciseCard";
export default function Home() {
  return (
    <main>
      <Header />
      <ExerciseCard
        name="Puxada frontal"
        description=" 3 séries x 12 repetições"
        image="/puxada-frontal.jpg"
      />
      </main>
  );
}
