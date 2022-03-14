import { useParams } from "react-router";


export default function KategorieInhalt(props){
    const { text } = useParams();

    console.log(text);
    console.log(props);
    return (
        <div>
      </div>
    )
}