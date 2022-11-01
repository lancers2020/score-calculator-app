import { useState } from "react";


function CalculateScore(){
    let [fname, setFName] = useState("");
    let [lname, setLName] = useState("");
    let [score1, setScore1] = useState();
    let [score2, setScore2] = useState();
    let [score3, setScore3] = useState();
    const score = [score1, score2, score3];
    let verdictP = "passed";
    let verdictF = "failed";

    const [isChanged, setIsChanged] = useState(false);

    const onChangeHandler = () => {
        let result = 0;
        if(isChanged){
            document.getElementById("p-2").innerHTML = "";
        }
        if((fname.trim() !== "") && (lname.trim() !== "")){ //im using !== because i want the data of what im comparing about to be of the same type
           if(!score.includes(NaN) && !score.includes("") && !score.includes(null) && !score.includes(undefined)){
                if((score[0] >= 0 && score[0] <= 100) && (score[1] >= 0 && score[1] <= 100) && (score[2] >= 0 && score[2] <= 100)){
                    console.log(score);
                    result = (score[0] + score[1] + score[2]) / 3;
                    if(result >= 75){
                        document.getElementById("p-1").innerHTML = verdictP;
                    }
                    else{
                        document.getElementById("p-1").innerHTML = verdictF;
                    }
                    document.getElementById("p-2").innerHTML = result.toFixed(2);
                }
                else{
                    document.getElementById("p-2").innerHTML += "<div/> valid scores (0 - 100)";
                    setIsChanged(true);
                }
            }
            else{
                console.log("so far so bad");
                for(var i = 0; i < 3; i++){
                    if(isNaN(score[i]) || score[i] === "" || score[i] === null || score[i] === undefined){
                        document.getElementById("p-2").innerHTML += "<div/> missing input on score number " + (parseInt(i)+1);
                        setIsChanged(true);
                    }
                }
            }
        }
        else{
            console.log("incomplete");
        }
    }

    return(
        <div className="wrapper">
            <input className="input" placeholder="input first name ..." name="f-name" onChange={
                (e) => {
                    setFName(e.target.value);
                }
            }></input>
            <input className="input" placeholder="input last name ..." name="l-name" onChange={
                (e) => {
                    setLName(e.target.value);
                }
            }></input>
            <div className="input-lower">
                <input type="number" className="input" id="score-1" name="score-1" placeholder="type a score" onChange={
                    (e) => {
                        setScore1(parseInt(e.target.value.trim()));
                    }
                }></input>
                <input type="number" className="input" id="score-2" name="score-2" placeholder="type a score" onChange={
                    (e) => {
                        setScore2(parseInt(e.target.value.trim()));
                    }
                }></input>
                <input type="number" className="input" id="score-3" name="score-3" placeholder="type a score" onChange={
                    (e) => {
                        setScore3(parseInt(e.target.value.trim()));
                    }
                }></input>
            </div>
            <button onClick={onChangeHandler}>click</button>
            <div id="show-1">
                <div id="p-1"></div>
                <div id="p-2"></div>
            </div>
        </div>
    )
}
export default CalculateScore;