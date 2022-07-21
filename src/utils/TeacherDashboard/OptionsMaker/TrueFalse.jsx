
import React, { useState ,useEffect} from "react";
import { Modal } from "@material-ui/core";

import "./OptionsMaker.scss";
import OptionsModal from "../OptionsModal/OptionsModal";
import { AiTwotoneEdit } from "react-icons/ai";
import { FaRegThumbsUp,FaRegThumbsDown } from "react-icons/fa";
// import ReactDOM from 'react-dom/client';
import SubmitModal from "../SubmitModal/SubmitModal";
import TinyEditor from "../../../components/TeacherDashboard/Main/UploadQuestion/TinyEditor";
import { Parser } from "html-to-react";
import TextEditorQuestion from "../TextEditor/TextEditorQuestion";
import { updatequestion } from "../../../actions/questions";


const TrueFalse = (props) => {
  // Props
  const {

    title = "",
    options = [],
    correctOptions = [""],
    optionsChangeHandler,
    solution ,
    answer,
    question,
    Editable,
    setEditable,
    index,
    image,
    positiveMarks,
    negativeMarks,
    setcomprehention, 
    fullcomprehenstion,
    setfullcomprehenstion,
    questionbank,
    setquestionbank,
    fullquest,
    item
  } = props;
  const [optionsmaker, setoptionsmaker] = useState([]);
  const [fullquestion, setfullquestion] = useState(item);
  const [headquestion, setheadquestion] = useState(question);
  const [editanswer, seteditanswer] = useState(answer);
  const [positivemarks, setpositivemarks] = useState(positiveMarks);
  const [negativemarks, setnegativemarks] = useState(negativeMarks);
  const [editsolution, seteditsolution] = useState(solution);
  const [photo, setphoto] = useState(image);


  useEffect(() => {
setfullcomprehenstion(fullquest)
  }, []);
// console.log(fullcomprehenstion)
  // console.log(editanswer,editsolution)
  // console.log(negativemarks,positivemarks)
  const [option, setoptions] = useState(options);
  const [initialvals, setinitialvals] = useState({
    title:title,
    
    optionsmaker:optionsmaker,
    solution:solution,
    answer:answer,
    question:question,
    image:image
  });
  // console.log(props.aphoto)
useEffect(() => {
  const temp=[]
  props.options.map((item)=>{
  
   temp.push(item.isCorrect)
 }
 
 )
 
 setoptionsmaker(temp)
 setinitialvals({...initialvals,optionsmaker:temp})
}, []);

// States

const [correctOptionModalOpen, setCorrectOptionModalOpen] = useState({
  open: false,
  modalType: "solution",
  solution:"",
  answer:"",value:"",
  key:0,setvalue:""  
});
const handleupdate = ()=>{
  let temp =[...Editable]
  if(temp[index]==0){
    
    temp[index]=1
  }else{
    temp[index]=0
  }
  // temp.push({value:1})
  // console.log(temp)
  setEditable(temp)
  setcomprehention(1)
  // console.log(temp)
  
}

const [submitModalOpen, setSubmitModalOpen] = useState(false);
const handletoggle=(i)=>{
  if(Editable[index]==1){
    
    let exit=0
    const temp =[...option]
    
    // console.log(index,temp,initialvals)
    
    if(temp[i].isCorrect=="incorrect"){
      temp.map((item)=>{
        if(item.isCorrect=="correct"){
          exit=1
          return alert("there is already a correct answer")
        }
        
        
        
      })
      
    }
    if(exit==0){
      
      temp[i].isCorrect=="correct"?temp[i].isCorrect="incorrect":temp[i].isCorrect="correct"
    }
    // console.log(temp)
    
    setoptions(temp)
    
  }else{
    alert("is not editable")
  }
}
// Function Handlers
// console.log(initialvals,option)

const optionValueChangeHandler = (e, index) => {
    const newOptions = options.map((item, i) =>
    i === index ? e.target.value : item
    );
    
    optionsChangeHandler(newOptions);
  };
  
  const deleteOptionHandler = (index) => {
    if (options.length > 2) {
      const newOptions = options.filter((item, i) => i !== index);
      optionsChangeHandler(newOptions);
    }
  };
  
  const addOptionHandler = (index) => {
    const newOptions = [...options, ""];
    optionsChangeHandler(newOptions);
  };
  
  const handleremove =(i)=>{
    const temp= option.filter((item, index) => index !== i);
    setoptions(temp)
    // console.log(temp,i,option)
    
  }
  const handleReview=()=>{
    setSubmitModalOpen(true)
  }
  const handleUndo =()=>{
   
    setheadquestion(question)
    setoptions(options)
    seteditanswer(answer)
    seteditsolution(solution)
    setpositivemarks(positiveMarks)
    setnegativemarks(negativeMarks)
    let temp =[...Editable]
    temp[index]=0
    setEditable(temp)
    // setEditable(0)
  
  }
  const handleSave =()=>{
    // console.log("these are full question",fullquestion)
    let qtemp={}
if(photo!="no pic"){
qtemp={
        
  photo:
 photo,
  quesDesc:
headquestion
}

}else{
  qtemp={
        
  
    quesDesc:
  headquestion
  }
}
const fulltemp=fullquest
    const temp = fullquestion
    const subQuestions={
      negativeMarks:negativemarks,
      positiveMarks:positivemarks,
      options:option,
      quesType:fullquestion.quesType,
      _id:temp._id,
      question:qtemp,
      solution:{
        // photo:
        // temp.subQuestions[0].solution.photo,
        solnDesc:
        editsolution
      },
      answer:{
        // photo:
        // temp.subQuestions[0].answer.photo,
        ansDesc:
        editanswer
      }



    }
    // console.log("this is created subquestion",subQuestions)

  
    fulltemp.subQuestions[index]=subQuestions


    // setfullquestion(fulltemp)
// console.log("this is the full question we have to send to api",fulltemp )
updatequestion(fulltemp).then((data=>{
  const predata=[...questionbank]
  predata[index]=data

  // console.log("the updated questions",fulltemp,questionbank,predata)
// setquestionbank(predata)
localStorage.setItem("questions",JSON.stringify(predata))

  let temp =[...Editable]
  temp[index]=0
  setEditable(temp)
  // console.log(data)   
}))
alert('updated')
   
    // console.log("these are the all values :",headquestion,option,editanswer,editsolution,positivemarks,negativemarks)
  }
  // Constants
  // console.log("question",fullquestion,index,props,)
  // console.log("the initial values of mcq",initialvals)
{/* <button onClick={()=>handleEditor(item.answer)}>Edit</button> */}

  const buttonList = [
    {
      title: "Solution",
      icon: "teacher-dashboard-question-single-option-add-button-white.svg",
      handler: () =>
        setCorrectOptionModalOpen({ open: true, modalType: "solution" ,solution:JSON.stringify(initialvals.solution) }),
    handleedit: () =>
    setCorrectOptionModalOpen({ open: true, modalType: "editsolution"  })
  
    
      },
    {
      title: "Answer",
      icon: "teacher-dashboard-question-single-option-add-button-white.svg",
      handler: () =>
        setCorrectOptionModalOpen({ open: true, modalType: "answer" ,answer:JSON.stringify(initialvals.answer) }),
        handleedit: () =>
    setCorrectOptionModalOpen({ open: true, modalType: "editanswer"  })
    },
  
    // {
    //   title: "Add  Option",
    //   icon: "teacher-dashboard-question-single-option-add-button-white.svg",
    //   handler: 
    // },
  ];

  const handleEditor =(item)=>{
    setCorrectOptionModalOpen({ open: true, modalType: "editor" ,value:item})
    // alert("hy")
  }
  const fourthButton = {
    title: "Add another Option",
    icon: "teacher-dashboard-question-single-option-add-button-white.svg",
    handler: addOptionHandler,
  };
// console.log(item)
  return (
    <section className="optionsMaker">
      <div className="optionsMaker__title">Question Type : {item.quesType}</div>
    {
     <div className="optionsMaker__optionList">
          <TextEditorQuestion
          index={index}
    Editable={Editable}
    question={headquestion}
    image={initialvals.image}
 changevalue={"question"}
    inputvals={initialvals}
    setinputvals={setinitialvals}
    fullquestion={fullquestion}
    setheadquestion={setheadquestion}
   />
      {option.map((item, i) => (
        // console.log(item,"these are options",Parser().parse(item.answer)),
        <div className="optionsMaker__optionList__item" key={i}>
          <div className="optionsMaker__optionList__item__number">
            <div className="optionsMaker__optionList__item__number__value">
              {i + 1}
            </div>
          
          </div>
          <label
            className="optionsMaker__optionList__item__textarea"
            // value={item.answer}
            onChange={(e) => optionValueChangeHandler(e, i)}
            placeholder={`Option ${i + 1}`}
          >{Parser().parse(item.answer)}
          </label>
          
          <div
            className="optionsMaker__optionList__item__delete ml-2"
            onClick={() => deleteOptionHandler(i)}
          >
            
              {initialvals.optionsmaker.map((option) => option === item) && (
                <div className="align">
               {/* { console.log(item)} */}
              {item.isCorrect=="correct"?<FaRegThumbsUp size="20px" color="green" onClick={()=>handletoggle(i)}/>:<FaRegThumbsDown size="20px" color="red" onClick={()=>handletoggle(i)}/>}
              </div>
            )}
           {
             Editable[index]==1?
             <img
               src="/assets/images/teacher-dashboard-question-single-option-cross-button.svg"
               alt="Delete"
               className="optionsMaker__optionList__item__delete__image"
               onClick={()=>{
                 handleremove(i)
               }}
             />:""

            
           }
           { Editable[index]==1? <img
              src={`/assets/images/teacher-dashboard-question-single-option-add-button-blue.svg`}
              alt="Add Icon"
              className=" pl-4 optionsMaker__optionList__item__delete__image"
              onClick={()=>{
                setCorrectOptionModalOpen({ open: true, modalType: "editor" ,value:option,key:i,setvalue:setoptions })
              }}
            />:""}
          </div>
          {/* <div dangerouslySetInnerHTML={{ __html: Parser().parse(item.answer) }}></div> */}
        </div>
      ))}
    </div>
    }
      
      <div className="optionsMaker__buttonList">
        <div className="optionsMaker__buttonList__left">
          {buttonList.map((item,i,j) => (
          
            <div key={i} className="display" >

            
            <button
   
              className="optionsMaker__buttonList__left__item"
              onClick={item.handler}
            >
              {/* <img
                src={`/assets/images/${item.icon}`}
                alt="Add Icon"
                className="optionsMaker__buttonList__left__item__icon"
              /> */}
              <span className="optionsMaker__buttonList__left__item__text">
                {item.title}
              </span>
            </button >
            

             { Editable[index]==1? <img
                src={`/assets/images/teacher-dashboard-question-single-option-add-button-blue.svg`}
                alt="Add Icon"
                className="point"
              
                onClick={item.handleedit}
              />:""}
          
              </div>
             
          ))}
          <button
  
  className="button "
  onClick={() =>{
    // const temp= [...initialvals.options]
    setCorrectOptionModalOpen({ open: true, modalType: "marks"  })
           
          }}
>
  
  <span className="optionsMaker__buttonList__left__item__text ">
Marks
  </span>
</button>
{ Editable[index]==1? <img
              src={`/assets/images/teacher-dashboard-question-single-option-add-button-blue.svg`}
              alt="Add Icon"
              className=""
              onClick={()=>{
                setCorrectOptionModalOpen({ open: true, modalType: "marksedit"  })
              }}
            />:""}
          {
             Editable[index]==1? <button
  
             className="optionsMaker__buttonList__left__item"
             onClick={() =>{
               // const temp= [...initialvals.options]
               
                       setoptions([...option,{answer:"",isCorrect:"incorrect"}])
                     }}
           >
             {/* <img
               src={`/assets/images/teacher-dashboard-question-single-option-add-button-white.svg`}
               alt="Add Icon"
               className="optionsMaker__buttonList__left__item__icon"
             /> */}
             <span className="optionsMaker__buttonList__left__item__text">
             Add  Option
             </span>
           </button>:""
          }
            {
             Editable[index]==1? <button
  
             className="optionsMaker__buttonList__left__item success"
             onClick={() =>{
              handleSave()
               
                      
                     }}
           >
             {/* <img
               src={`/assets/images/teacher-dashboard-question-single-option-add-button-white.svg`}
               alt="Add Icon"
               className="optionsMaker__buttonList__left__item__icon"
             /> */}
             <span className="optionsMaker__buttonList__left__item__text success">
            Save
             </span>
           </button>:""
          }


           <button
            
            className=  { Editable[index]==1?"optionsMaker__buttonList__left__item":"center top"}
            onClick={ Editable[index]==0?  handleupdate:handleUndo}
          >
            {/* <img
              src={`/assets/images/${item.icon}`}
              alt="Add Icon"
              className="optionsMaker__buttonList__left__item__icon"
            /> */}  
            <span className="optionsMaker__buttonList__left__item__text">
              { Editable[index]==1?"Undo":<AiTwotoneEdit size="20px"/>}
            
            </span>
          </button>
        </div>
       
        <div className="optionsMaker__buttonList__right">
       
        </div>
      </div>

      <div className="optionsMaker__submitRow">
       
      </div>
      <Modal
        open={correctOptionModalOpen.open}
        onClose={() =>
          setCorrectOptionModalOpen({ open: false, modalType: "" })
        }
      >
        <>
          <OptionsModal
            {...props}
            title={"Please choose correct option"}
            modalType={correctOptionModalOpen.modalType}
            setModalOpen={setCorrectOptionModalOpen}
            solution={correctOptionModalOpen.solution}
            answer={correctOptionModalOpen.answer }
            value={correctOptionModalOpen.value}
            initialvals={initialvals}
            edit={correctOptionModalOpen.setvalue}
            optionno={correctOptionModalOpen.key}
options={option}
editsolution={editsolution}
editanswer={editanswer}
seteditsolution={seteditsolution}
seteditanswer={seteditanswer}
setpositiveMarks={setpositivemarks}
setnegativeMarks={setnegativemarks}
positiveMarks={positivemarks}
negativeMarks={negativemarks}


            setinitialvals={setinitialvals}
          />
        </>
      </Modal>
      <Modal
        open={submitModalOpen}
        setOpen={setSubmitModalOpen}
        onClose={() => setSubmitModalOpen(false)}
      >
        <>
          <SubmitModal
            open={submitModalOpen}
            setOpen={setSubmitModalOpen}
            onClose={() => setSubmitModalOpen(false)}
          />
        </>
      </Modal>
    </section>
  );
};

export default TrueFalse;
