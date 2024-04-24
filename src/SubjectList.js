import React from 'react';

// function SubjectList(){
// 	return (
//   	  <div>This is going to be a list</div>
//   	)
// }

function SubjectList(props){
    let subjects = props.data;

    return (
        <div>
    	    <ol>
            {/* <li>{subjects[0].code} - {subjects[0].description}</li> */}

            {
                subjects.map((subject) => {
                    return <li>{subject.code} - {subject.description}</li>
                })
            }

    	    </ol>
  	    </div>
    );
}

export default SubjectList


