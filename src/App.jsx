//import classNames from "classnames";
import { useState} from "react";
import { Statistics } from "./components/Statistics/Statistics";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions";
import { Section } from "./components/Section/Section"
import {Notification}  from "./components/Notificstion/Notification"
 

export const App = () => {
  const [ good,setGood] = useState(0);
  const [neutral,setNeutral] = useState(0);
  const [bad, setBad] = useState(0)

   const feedback = { good, neutral, bad };
   const handleFeedback = feedback => {
    switch (feedback) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        console.log('Invalid feedback type');
    }
  };
  
 //const countTotalFeedback = () => Object.values(feedback).reduce((total, item) => total + item, 0);
   const countTotalFeedback = () => {
  return  good + neutral + bad;
    
  } 
  
  const countPositiveFeedbackPercentage = () => {
     const total = countTotalFeedback();
    const percent = (good * 100) / total;
    return Math.round(percent);
  }

    return (
      <>
        <Section title="Please Leave Feetback">
          <FeedbackOptions onLeaveFeedback={handleFeedback} options={feedback} />
        </Section>          <Section title="Statistics">
         {countTotalFeedback()  > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
          positiveFeedback={countPositiveFeedbackPercentage()}/>)
           : <Notification message="There is no feedback" />} 
        </Section>
      </>)
  }



























// class  App extends Component{
// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// }

//    onKlickOptions = keyName => {
//      this.setState(prevState => 
// ({ [keyName]: prevState[keyName] + 1})  
//      )
//      //console.log(Object.keys() )
//    }
//    countTotalFeedback = () => {
//      const { good, neutral, bad }= this.state;
//    return   good + neutral + bad
//  //  countTotalFeedback = () =>
//     //Object.values(this.state).reduce((total, item) => total + item, 0);
//   }
    
//    countPositiveFeedbackPercentage = () => {
//      const total = this.countTotalFeedback();
//      const { good } = this.state;
//      const percent = (good * 100) / total;
//      return Math.round(percent);
//    }
//    hideSection = () => {
//      if (this.state.value === 0) {
//        this.setState({True: true})
//      }
     
//   }
//    render() {
//      const { good, bad, neutral } = this.state;
//      const total = this.countTotalFeedback();
//      const positivePercentage = this.countPositiveFeedbackPercentage();
//      //const ObjVal = Object.value;
//      return (
//        <>
//          <Section title="Please Leave Feetback">
//            <FeedbackOptions onLeaveFeedback={this.onKlickOptions} options={this.state} />
//          </Section>
//          <Section title="Statistics">
//            {total > 0 ? ( 
//              <Statistics
//              good={good}
//              neutral={neutral}
//              bad={bad}
//              total={total}
//              positiveFeedback={positivePercentage} />)
//           : <Notification message="There is no feedback" />}
//     </Section> 
//        </>)
//    }

// };

// export default App;
