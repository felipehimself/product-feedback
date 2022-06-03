import { useState } from 'react';
import * as Style from './styles';
import STYLES from '../../constants/styles';
import ArrowLeftIon from '../Svgs/ArrowLeftIon';
import { H1, Button } from '../../shared/sharedComponents';
import { Navigate } from '../../shared/sharedComponents';
import { categories } from '../../utils/data';
import DropDownIcon from '../Svgs/DropDownIcon';
import { useDispatch } from 'react-redux';
import { addSuggestion } from '../../store/slices/dataSlice';
import { uuid } from '../../utils/functions';
import { useNavigate } from 'react-router-dom';

const filteredCategories = categories.filter((category) => category !== 'all');

const Form = () => {
  const [selectedCategory, setSelectedCategory] = useState('feature');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isOpenCategories, setIsOpenCategories] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelect = (category: string) => {
    setSelectedCategory(category);
    setIsOpenCategories(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setError(false)

    if (title === '' || description === '') {
      setMessage('All fields are required');
      setError(true)
      return;
    }

    setMessage('Suggestion has been sent!');

    dispatch(
      addSuggestion({
        title: title,
        status: 'planned',
        category: selectedCategory,
        detail: description,
        votes: 0,
        id: uuid(),
        comments: [],
      })
    );

    setTitle('');
    setSelectedCategory('feature');
    setDescription('');
    setIsOpenCategories(false);

    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <Style.FormContainer>
      <Style.FormHeader>
        <Style.Navigate to='/'>
          <ArrowLeftIon />
          Go Back
        </Style.Navigate>
      </Style.FormHeader>
      <Style.Form>
        <H1>Create New Feedback</H1>
        <Style.FormControl>
          <Style.Label htmlFor='title'>Feedback title</Style.Label>
          <Style.Span>Add a short, descriptive headline</Style.Span>
          <Style.Input
            onChange={(e) => setTitle(e.target.value)}
            id='title'
            value={title || ''}
          />
        </Style.FormControl>
        <Style.FormControl>
          <Style.Label htmlFor='category'>Category</Style.Label>
          <Style.Span>Choose a category for your feedback</Style.Span>
          <Style.SelectedContainer>
            <Style.Selected
              type='button'
              onClick={() => setIsOpenCategories((prev) => !prev)}
            >
              {selectedCategory}{' '}
              <DropDownIcon color='#4661E6' isOpen={isOpenCategories} />
            </Style.Selected>

            {isOpenCategories && (
              <Style.Ul>
                {filteredCategories.map((category) => {
                  return (
                    <Style.Li>
                      <Style.ButtonItem
                        type='button'
                        onClick={() => handleSelect(category)}
                      >
                        {category}
                      </Style.ButtonItem>
                    </Style.Li>
                  );
                })}
              </Style.Ul>
            )}
          </Style.SelectedContainer>
        </Style.FormControl>
        <Style.FormControl>
          <Style.Label htmlFor='detail'>Feedback Detail</Style.Label>
          <Style.Span>
            Include any specific comments on what should be improved, added,
            etc.
          </Style.Span>
          <Style.Textarea
            onChange={(e) => setDescription(e.target.value)}
            id='detail'
            value={description || ''}
          />
        </Style.FormControl>
        <Style.P className={error ? 'error' : undefined}>
          {message.length > 0 && message}
        </Style.P>
        <Style.FormControl
          margin='1rem 0 0 0'
          gap='1rem'
          justify='flex-end'
          direction='row'
          align='flex-end'
        >
          <Navigate background={STYLES.colors.colorGraySecondary} to='/'>
            Cancel
          </Navigate>
          <Button type='submit' onClick={handleSubmit}>
            Add Feedback
          </Button>
        </Style.FormControl>
      </Style.Form>
    </Style.FormContainer>
  );
};
export default Form;
