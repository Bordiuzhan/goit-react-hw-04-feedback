import { Btn, Wrapper } from './Button.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onClick, options }) => {
  return (
    <Wrapper>
      {options.map(option => (
        <Btn
          key={option}
          onClick={() => {
            onClick(option);
          }}
        >
          {option}
        </Btn>
      ))}
    </Wrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bed']))
    .isRequired,
  onClick: PropTypes.func.isRequired,
};
