import { useState } from 'react';
import * as Style from './styles';
import STYLES from '../../constants/styles';
import { H1, Button, Navigate } from '../../components/shared/shared';
import Goback from '../../components/GoBack/Goback';
import { categories } from '../../utils/data';
import { uuid } from '../../utils/functions';
import { useDispatch } from 'react-redux';
import { addSuggestion } from '../../store/slices/dataSlice';
import { useNavigate } from 'react-router-dom';

import { IData } from '../../interfaces/DataInterface';

import DropDownIcon from '../../components/Svgs/DropDownIcon';
import CheckIcon from '../../components/Svgs/CheckIcon';

const filteredCategories = categories.filter((category) => category !== 'all');

const FormAdd = () => {
  const [isOpenCategories, setIsOpenCategories] = useState(false);
  const [message, setMessage] = useState({ msg: '', isError: false });
  const [suggestion, setSuggestion] = useState<IData | null>({
    title: '',
    category: 'feature',
    detail: '',
    comments: [],
    id: uuid(),
    status: 'suggestion',
    votes: 0,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setSuggestion((prev: any) => {
      return { ...prev, [name]: value };
    });

    if (name === 'category') {
      setIsOpenCategories(false);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setMessage({ msg: '', isError: false });

    if (suggestion?.title === '' || suggestion?.detail === '') {
      setMessage({ msg: 'All fields are required', isError: true });
      return;
    }

    setMessage({ msg: 'Suggestion has been sent!', isError: false });
    dispatch(addSuggestion(suggestion));

    setIsOpenCategories(false);

    setTimeout(() => {
      setSuggestion({
        title: '',
        category: 'feature',
        detail: '',
        comments: [],
        id: uuid(),
        status: 'suggestion',
        votes: 0,
      });
      navigate('/');
    }, 2000);
  };

  return (
    <Style.FormContainer>
      <Style.FormHeader>
        <Goback to='/' />
      </Style.FormHeader>
      <Style.Form>
        <H1>Create New Feedback</H1>
        <Style.FormControl>
          <Style.Label htmlFor='title'>Feedback title</Style.Label>
          <Style.Span>Add a short, descriptive headline</Style.Span>
          <Style.Input
            onChange={handleChange}
            name='title'
            id='title'
            value={suggestion?.title || ''}
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
              {suggestion?.category}
              <DropDownIcon
                color={STYLES.colors.colorBluePrimary}
                isOpen={isOpenCategories}
              />
            </Style.Selected>

            {isOpenCategories && (
              <Style.Ul>
                {filteredCategories.map((category) => {
                  return (
                    <Style.Li key={category}>
                      <Style.ButtonItem
                        type='button'
                        onClick={handleChange}
                        name='category'
                        value={category}
                        className={
                          suggestion?.category === category
                            ? 'active'
                            : undefined
                        }
                      >
                        {category}
                        {suggestion?.category === category && <CheckIcon />}
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
            onChange={handleChange}
            name='detail'
            id='detail'
            value={suggestion?.detail || ''}
          />
        </Style.FormControl>
        <Style.P className={message?.isError ? 'error' : undefined}>
          {message?.msg?.length > 0 && message?.msg}
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
export default FormAdd;
