import { useState } from "react";
import { FaTimes } from "react-icons/ai";
const Resenia = ({ resenia }) => {

   let [rating, setRating] = useState(resenia.id);
   let [comment, setComment] = useState(resenia.text);
    
  const changeNoteSum = () => {
    setRating((pre)=>{
      return pre+1
    })
  }
  const changeNoteRest = () => {
    setRating((pre)=>{
      return pre-1
    })
  }
  return (
    <div className="card" >
        <div className="num-display" >
         { rating }
        </div>
        <div className="text-display">
            {comment}
        </div>
        <button onClick={changeNoteSum} >
            Change Note
        </button>
        <button onClick={changeNoteRest} >
            Rest Note
        </button>
    </div>
  )
}

export default Resenia
