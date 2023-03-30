import { useParams } from "react-router-dom";

export default function DetailCate() {
  const { id } = useParams();
  return <div>DetailCate {id}</div>;
}
