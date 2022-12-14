import { Section } from './Section';
import { FeedbackOptions } from './Button';
import { Statistics } from './Statistic';
import { Notification } from './Notification';
import { Layout } from './Layout';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = type => {
    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const totalState = good + neutral + bad;

  const positivePercentage = () => {
    return totalState ? Math.round((100 / totalState) * good) : 0;
  };

  return (
    <Layout>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          onClick={onLeaveFeedback}
          options={Object.keys(good)}
        ></FeedbackOptions>
      </Section>
      <Section title={'Statistics'}>
        {totalState > 0 ? (
          <Statistics
            state={{ good, neutral, bad }}
            total={totalState}
            positivePercentage={positivePercentage()}
          ></Statistics>
        ) : (
          <Notification message={'There is no feedback'}></Notification>
        )}
      </Section>
    </Layout>
  );
};
