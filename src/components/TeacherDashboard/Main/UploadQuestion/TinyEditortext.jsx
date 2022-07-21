import React, { useState,useRef  } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import "./AddQuestion.scss";
import { Modal } from "@material-ui/core";
export default function TinyEditortext({input ,setinput,closemodal}) {
const handleSubmit =(e)=>{
e.preventDefault()
// console.log("these are the changes",inputvalue,input)
setinput(inputvalue)
closemodal({ open: false, modalType: "" })

}
    const editorRef = useRef(null);
    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
    };
    // console.log("this is value",input)
    const [inputvalue, setinputvalue] = useState(input);
  return (
    <div className='container  size'>
        <form onSubmit={handleSubmit} className="size">

    <h2>


       
        </h2>
        <Editor
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  value={inputvalue}
                  onEditorChange={(e) => {
                    setinputvalue( e );
                  }}
                  init={{
                    height: 349,
                    width: "100%",
                    selector:'.tinymce',
                
                    menubar: false,
                    plugins: [
                        "advlist autolink lists link image charmap print preview hr anchor pagebreak",
                        "searchreplace wordcount visualblocks visualchars code fullscreen",
                        "insertdatetime media nonbreaking save table contextmenu directionality",
                        "emoticons template paste textcolor colorpicker textpattern spellchecker"
                    ],
                    toolbar1: "insertfile undo redo | styleselect | fontselect fontsizeselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | hr link unlink image | print preview media | forecolor backcolor emoticons spellchecker searchreplace | visualchars blockquote charmap table | removeformat fullscreen code",
                    extended_valid_elements : "script[language|type|async|src|charset]",
                    valid_children : "+body[style], +style[type]",
                    valid_elements : '*[*]',
                    image_advtab: true,
                    image_title: true,
                    relative_urls : false,
                    remove_script_host : false,
                    entity_encoding: "raw",
                    apply_source_formatting : false,
                    verify_html : false,
                    convert_urls : false,
                    deprecation_warnings: false
       
                  }}
                  />
                  <button className='optionsModal__scrollable__card__body__submit'>
                  Save 
                                  </button>
        </form>



    </div>
  )
}
