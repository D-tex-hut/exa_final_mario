import Header from "../components/Header/Header";
import ExerciseCard from "../components/ExerciseCard/ExerciseCard";
import ExerciseList from "@/components/ExerciseList/ExerciseList";
export default function Home() {
  return (
    <main className = "container  ">
      <Header />
      <ExerciseList />
      
      </main>
  );
}
