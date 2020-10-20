import React from 'react';

import QuizRow from './QuizRow'

const Quiz = () => {

  const questions = [
    {
      question: 'Have you sleept well?',
      name: 'sleptWell',
    },
    {
      question: 'How long have you slept?',
      name: 'sleepDuration',
    },
    {
      question: 'Have you wake up in the night?',
      name: 'sleepInterupted',
    },
    {
      question: 'Snoozing in the morning?',
      name: 'snoozing',
    },
    {
      question: 'Or naps during the day?',
      name: 'dayNap',
    },
    {
      question: 'Have you eaten regularelly?',
      name: 'mealRegularity',
    },
    {
      question: 'Skipped meal?',
      name: 'skippedMeal',
    },
    {
      question: 'Junk food?',
      name: 'junkFood',
    },
    {
      question: 'How many glasses of water have you had?',
      name: 'waterGlasses',
    },
  ];

  function renderQuizRow() {


    return questions.map(question => {
      return (
        <QuizRow
          key={question.name}
          question={question.question}
          name={question.name}
        />
      )
    })
  }

  return (
    <div>
      <h4>Hi, I am Quiz</h4>
      {renderQuizRow()}
    </div>

  )
}

export default Quiz;




// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// import RadioButton from './RadioButton/RadioButton';

// class Quiz extends React.Component {

//   state = {

//   }


//   handleRadioButtonChange = (name, value) => {
//     this.setState({ [name]: value })
//     console.log(name, value);
//   };

//   renderQuiz() {
//     const questions = [
//       {
//         question: 'Have you sleept well?',
//         name: 'sleptWell',
//       },
//       {
//         question: 'How long have you slept?',
//         name: 'sleepDuration',
//       },
//       {
//         question: 'Have you wake up in the night?',
//         name: 'sleepInterupted',
//       },
//       {
//         question: 'Snoozing in the morning?',
//         name: 'snoozing',
//       },
//       {
//         question: 'Or naps during the day?',
//         name: 'dayNap',
//       },
//       {
//         question: 'Have you eaten regularelly?',
//         name: 'mealRegularity',
//       },
//       {
//         question: 'Skipped meal?',
//         name: 'skippedMeal',
//       },
//       {
//         question: 'Junk food?',
//         name: 'junkFood',
//       },
//       {
//         question: 'How many glasses of water have you had?',
//         name: 'waterGlasses',
//       },
//     ];

//     return questions.map(({ question, name }) => {
//       return (
//         <div key={name}>
//           <Row
//             className="m-3 justify-content-md-center"
//           >
//             <Col sm={6}>
//               <h4>{question}</h4>
//             </Col>
//             <Col sm={2}>
//               {/* <QuestionRow
//                 question="What?"
//                 component={(
//                   <RadioButton
//                     name="question1"
//                     onChange={this.handleRadioButtonChange}
//                     options={[
//                     {
//                       label: 'Yes',
//                       value: true,
//                     },
//                     {
//                       label: 'No',
//                       value: false,
//                     }
//                   ]} />
//                 )}
//               /> */}
//               <RadioButton
//                 name={name}
//                 onChange={this.handleRadioButtonChange}
//                 options={[
//                   {
//                     label: 'Yes',
//                     value: true,
//                   },
//                   {
//                     label: 'No',
//                     value: false,
//                   }
//                 ]}
//               />
//               {/* <button
//                 onClick={() => {
//                   this.setState({ question, answer: true })
//                 }}
//                 className="m-2"
//               >
//                 YES
//               </button>

//               <button
//                 onClick={() => {
//                   this.setState({ question, answer: false })
//                 }}
//                 className="m-2"
//               >
//                 NO
//               </button> */}
//             </Col>
//           </Row>
//         </div>
//       );
//     })
//   }


//   render() {

//     console.log(this.state)

//     return (
//       <Container fluid>
//         {this.renderQuiz()}
//       </Container>
//     );
//   }
// }

// export default Quiz;