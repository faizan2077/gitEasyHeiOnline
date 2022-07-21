import React , { useEffect, useState } from 'react'
import TrueFalse from "../../../../../utils/TeacherDashboard/OptionsMaker/TrueFalse";
import MutipleQuestionOptionMaker from "../../../../../utils/TeacherDashboard/OptionsMaker/MutipleQuestionOptionMaker";
import Comprehention from "../../../../../utils/TeacherDashboard/TextEditor/Comprehention";
import { updatequestion } from "../../../../../actions/questions";

export default function Comprehension({singlequestion ,fullquest,item ,questionbank,setquestionbank,Editableloop,setEditableloop,optionsChangeHandler2,correctOptionsChangeHandler2,multiplequestion,solutionChangeHandler2,index,hintChangeHandler2}) {
    const [fullcomprehenstion, setfullcomprehenstion] = useState(0  );
    const [comprehention, setcomprehention] = useState(0);
    const [para, setpara] = useState("");

    const handleSubmit =(data2,index)=>{
        data2.question=para
        // console.log(para)
        // console.log(data2)
        updatequestion(data2).then((data=>{
          const predata=[...questionbank]
          predata[index]=data
        
          // console.log("the updated questions",questionbank,predata)
        // setquestionbank(predata)
        localStorage.setItem("questions",JSON.stringify(predata))
        
         
          setcomprehention(0)
          // console.log(data,temp)   
        }))
        alert('updated')
          
      }
  return (
    <div>

             (
              <div key={index}>
                <h2 className="heading">{item.quesType}</h2>
                {
                  comprehention==1?
                <div className="end mb-3">

                <button onClick={()=>handleSubmit(fullquest,index)} className="button">
                  Submit
                </button>
                </div>:""
                }
                <Comprehention
                  title={item.quesType}
                  question={item.question}
                   image={item.question.photo!=undefined?item.question.photo:"no pic"}
                  key={index}
                  inputvals={para}
                  setinputvals={setpara}
                  Editable={comprehention}
                  questionbank={questionbank}
                  setquestionbank={setquestionbank}
                  index={index}
                />

                {singlequestion && singlequestion.map((item, index) => {
                  if (item.quesType == "multiple_choice") {
                    //   console.log("these if",item.quesType)

                    const singlequestion = item;
                    //   setmultiplequestion({ ...multiplequestion, hint: val });
                    //   options: ["", "", "", ""],
                    //   correctOptions: [],
                    //   solution: "",
                    //   hint: "",
                    

                    return (
                      <div key={index}>
                        {/* <MutipleQuestionOptionMaker
                          title={item.quesType}
                          question={JSON.stringify(
                            item.question.quesDesc
                          )}
                          image={item.question.photo!=undefined?item.question.photo:""}
                          key={index}
                          inputvals={inputvals}
                          setinputvals={setinputvals}
                        /> */}
                        <TrueFalse
                          title={" "}
                          item={item}
                          answer={
                            singlequestion.answer
                              ? singlequestion.answer.ansDesc
                              : "no Answer"
                          }
                          hintChangeHandler={hintChangeHandler2}
                          solution={
                            singlequestion.solution
                              ? singlequestion.solution.solnDesc
                              : "no Solution"
                          }
                          aphoto={
                            singlequestion.answer&&singlequestion.answer.photo!=undefined
                              ? singlequestion.answer.photo
                              : "no photo"
                          }
                          negativeMarks={singlequestion.negativeMarks}
                          positiveMarks={singlequestion.positiveMarks}
                          solutionChangeHandler={solutionChangeHandler2}
                          options={singlequestion.options}
                          correctOptions={multiplequestion.correctOptions}
                          optionsChangeHandler={optionsChangeHandler2}
                          correctOptionsChangeHandler={correctOptionsChangeHandler2}
                          question={JSON.stringify(singlequestion.question.quesDesc)}
                          image={singlequestion.question.photo!=undefined?singlequestion.question.photo:"no pic"}
                          Editable={Editableloop}
                          setEditable={setEditableloop}
                          index={index}
                          setcomprehention={setcomprehention}
                          fullcomprehenstion={fullcomprehenstion}
                          setfullcomprehenstion={setfullcomprehenstion}
                          questionbank={questionbank}
                  setquestionbank={setquestionbank}
                          fullquest={fullquest}
                       />
                      </div>
                    );
                  } else if (item.quesType == "true_false") {
                    const singlequestion = item;
                    //   setmultiplequestion({ ...multiplequestion, hint: val });
                    //   options: ["", "", "", ""],
                    //   correctOptions: [],
                    //   solution: "",
                    //   hint: "",
                    // const answer= /
                    // console.log("qu  estion:",singlequestion.answer.ansDesc)

                    return (
                      <div key={index}>
                       
                        <TrueFalse
                         title={" "}
                         item={item}
                         answer={
                           singlequestion.answer
                             ? singlequestion.answer.ansDesc
                             : "no Answer"
                         }
                         hintChangeHandler={hintChangeHandler2}
                         solution={
                           singlequestion.solution
                             ? singlequestion.solution.solnDesc
                             : "no Solution"
                         }
                         aphoto={
                           singlequestion.answer&&singlequestion.answer.photo!=undefined
                             ? singlequestion.answer.photo
                             : "no photo"
                         }
                         negativeMarks={singlequestion.negativeMarks}
                         positiveMarks={singlequestion.positiveMarks}
                         solutionChangeHandler={solutionChangeHandler2}
                         options={singlequestion.options}
                         correctOptions={multiplequestion.correctOptions}
                         optionsChangeHandler={optionsChangeHandler2}
                         correctOptionsChangeHandler={correctOptionsChangeHandler2}
                         question={JSON.stringify(singlequestion.question.quesDesc)}
                         image={singlequestion.question.photo!=undefined?singlequestion.question.photo:"no pic"}
                         Editable={Editableloop}
                         setEditable={setEditableloop}
                         index={index}
                         setcomprehention={setcomprehention}
                         fullcomprehenstion={fullcomprehenstion}
                         setfullcomprehenstion={setfullcomprehenstion}
                         questionbank={questionbank}
                         setquestionbank={setquestionbank}
                          fullquest={fullquest}
                       />
                      </div>
                    );
                  } else if (item.quesType == "fill_ups") {
                    const singlequestion = item;
                    //   setmultiplequestion({ ...multiplequestion, hint: val });
                    //   options: ["", "", "", ""],
                    //   correctOptions: [],
                    //   solution: "",
                    //   hint: "",
                    // const answer=
                    // console.log("question:",singlequestion,singlequestion.solution,singlequestion.options)

                    return (
                      <div key={index}>
                      
                        <TrueFalse
                  title={" "}
                  item={item}
                  answer={
                    singlequestion.answer
                      ? singlequestion.answer.ansDesc
                      : "no Answer"
                  }
                  hintChangeHandler={hintChangeHandler2}
                  solution={
                    singlequestion.solution
                      ? singlequestion.solution.solnDesc
                      : "no Solution"
                  }
                  aphoto={
                    singlequestion.answer&&singlequestion.answer.photo!=undefined
                      ? singlequestion.answer.photo
                      : "no photo"
                  }
                  negativeMarks={singlequestion.negativeMarks}
                  positiveMarks={singlequestion.positiveMarks}
                  solutionChangeHandler={solutionChangeHandler2}
                  options={singlequestion.options}
                  correctOptions={multiplequestion.correctOptions}
                  optionsChangeHandler={optionsChangeHandler2}
                  correctOptionsChangeHandler={correctOptionsChangeHandler2}
                  question={JSON.stringify(singlequestion.question.quesDesc)}
                  image={singlequestion.question.photo!=undefined?singlequestion.question.photo:"no pic"}
                  Editable={Editableloop}
                  setEditable={setEditableloop}
                  index={index}      
                  setcomprehention={setcomprehention}    
                  fullcomprehenstion={fullcomprehenstion}
                  setfullcomprehenstion={setfullcomprehenstion}
                  questionbank={questionbank}
                  setquestionbank={setquestionbank}
                  fullquest={fullquest}
                  />
                      </div>
                    );
                  } else if (item.quesType == "integer") {
                    const singlequestion = item;
                    //   setmultiplequestion({ ...multiplequestion, hint: val });
                    //   options: ["", "", "", ""],
                    //   correctOptions: [],
                    //   solution: "",
                    //   hint: "",
                    // const answer=
                    // console.log("question:",singlequestion,singlequestion.solution,singlequestion.options)

                    return (
                      <div key={index}>
                       

                        <TrueFalse
                        title={" "}
                        item={item}
                        answer={
                          singlequestion.answer
                            ? singlequestion.answer.ansDesc
                            : "no Answer"
                        }
                        hintChangeHandler={hintChangeHandler2}
                        solution={
                          singlequestion.solution
                            ? singlequestion.solution.solnDesc
                            : "no Solution"
                        }
                        aphoto={
                          singlequestion.answer&&singlequestion.answer.photo!=undefined
                            ? singlequestion.answer.photo
                            : "no photo"
                        }
                        negativeMarks={singlequestion.negativeMarks}
                        positiveMarks={singlequestion.positiveMarks}
                        solutionChangeHandler={solutionChangeHandler2}
                        options={singlequestion.options}
                        correctOptions={multiplequestion.correctOptions}
                        optionsChangeHandler={optionsChangeHandler2}
                        correctOptionsChangeHandler={correctOptionsChangeHandler2}
                        question={JSON.stringify(singlequestion.question.quesDesc)}
                        image={singlequestion.question.photo!=undefined?singlequestion.question.photo:"no pic"}
                        Editable={Editableloop}
                        setEditable={setEditableloop}
                        index={index}
                        setcomprehention={setcomprehention}
                        fullcomprehenstion={fullcomprehenstion}
                        setfullcomprehenstion={setfullcomprehenstion}
                        questionbank={questionbank}
                  setquestionbank={setquestionbank}
                        fullquest={fullquest}
                       />
                      </div>
                    );
                  } else {
                    return <div key={index}>no Data Left</div>;
                  }
                })}

                {/* <Fillups
                          title={" "}
                          answer={singlequestion.solution?singlequestion.solution.solnDesc:"no"}
                          hintChangeHandler={hintChangeHandler4}
                          solution={singlequestion.solution?singlequestion.solution.solnDesc:"no Solution"}
                          solutionChangeHandler={solutionChangeHandler4}
                          options={ singlequestion.options}
                          correctOptions={ fillupquestion.correctOptions}
                          optionsChangeHandler={optionsChangeHandler4}
                          correctOptionsChangeHandler={correctOptionsChangeHandler4}
                        />  */}
              </div>
            );
         
        
        
        
          
         

    </div>
  )
}
