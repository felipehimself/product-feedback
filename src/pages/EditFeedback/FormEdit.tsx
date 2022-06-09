import { useState, useEffect } from 'react';
import * as Style from './styles';
import STYLES from '../../constants/styles';
import { H1, Button, Navigate } from '../../components/shared/shared';
import { categories, status } from '../../utils/data';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSuggestion, editSuggestion } from '../../store/slices/dataSlice';
import { RootState } from '../../store/store';
import { useNavigate, useParams } from 'react-router-dom';
import { IData } from '../../interfaces/DataInterface';

import ArrowLeftIcon from '../../components/Svgs/ArrowLeftIcon';
import PencilIcon from '../../components/Svgs/PencilIcon';
import DropDownIcon from '../../components/Svgs/DropDownIcon';
import CheckIcon from '../../components/Svgs/CheckIcon';

const filteredCategories = categories.filter((category) => category !== 'all');

const FormEdit = () => {
  const [isOpenCategories, setIsOpenCategories] = useState(false);
  const [isOpenStatus, setIsOpenStatus] = useState(false);
  const [message, setMessage] = useState({ msg: '', isError: false });
  const [suggestion, setSuggestion] = useState<IData | null>(null);
  const [title, setTitle] = useState('')

  const { data } = useSelector((state: RootState) => state.data);
  const { id } = useParams();

  useEffect(() => {
    const suggestionToEdit = data.find((suggestion) => suggestion.id === id);
    setSuggestion(suggestionToEdit!);
    setTitle(suggestionToEdit?.title!)
  }, [id, data]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setSuggestion((prev: any) => {
      return { ...prev, [name]: value };
    });

    if (name === 'category' || name === 'status') {
      setIsOpenCategories(false);
      setIsOpenStatus(false);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setMessage({ msg: '', isError: false });

    if (suggestion?.title === '' || suggestion?.detail === '') {
      setMessage({ msg: 'All fields are required', isError: true });

      return;
    }

    dispatch(
      editSuggestion({
        id: id,
        title: suggestion?.title,
        status: suggestion?.status,
        category: suggestion?.category,
        detail: suggestion?.detail,
      })
    );

    

    setIsOpenCategories(false);
    setMessage({ msg: 'Suggestion has been edited!', isError: false });

    setTimeout(() => {
      setSuggestion(null);
      navigate('/');
    }, 2000);
  };

  const handleDelete = () => {
    dispatch(deleteSuggestion(id));
    setMessage({ msg: 'Suggestion has been deleted!', isError: false });
    
    setTimeout(() => {
      setSuggestion(null);
      navigate('/');
    }, 2000);
  };

  return (
    <Style.FormContainer>
      <Style.FormHeader>
        <Style.Navigate to={`/feedback-details/${suggestion?.id}`}>
          <ArrowLeftIcon />
          Go Back
        </Style.Navigate>
      </Style.FormHeader>
      <Style.Form>
        <PencilIcon />
        <H1>Editing '{title}'</H1>
        <Style.FormControl>
          <Style.Label htmlFor='title'>Feedback title</Style.Label>
          <Style.Span>Add a short, descriptive headline</Style.Span>
          <Style.Input
            onChange={handleChange}
            name='title'
            id='title'
            value={suggestion?.title || ''}
            placeholder={suggestion?.title}
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
                        name='category'
                        value={category}
                        onClick={handleChange}
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
          <Style.Label htmlFor='category'>Update Status</Style.Label>
          <Style.Span>Change feature state</Style.Span>
          <Style.SelectedContainer>
            <Style.Selected
              type='button'
              onClick={() => setIsOpenStatus((prev) => !prev)}
            >
              {suggestion?.status}
              <DropDownIcon
                color={STYLES.colors.colorBluePrimary}
                isOpen={isOpenStatus}
              />
            </Style.Selected>

            {isOpenStatus && (
              <Style.Ul>
                {status.map((type) => {
                  return (
                    <Style.Li key={type}>
                      <Style.ButtonItem
                        onClick={handleChange}
                        value={type}
                        name='status'
                        type='button'
                        className={
                          suggestion?.status === type ? 'active' : undefined
                        }
                      >
                        {type}
                        {suggestion?.status === type && <CheckIcon />}
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
            value={suggestion?.detail || ''}
            id='detail'
            placeholder={suggestion?.detail}
          />
        </Style.FormControl>
        <Style.P className={message.isError ? 'error' : undefined}>
          {message?.msg.length > 0 && message?.msg}
        </Style.P>
        <Style.FormControl
          margin='1rem 0 0 0'
          gap='1rem'
          justify='flex-end'
          direction='row'
          align='flex-end'
        >
          <Button
            background={STYLES.colors.colorRed}
            type='button'
            onClick={handleDelete}
          >
            Delete
          </Button>
          <Navigate
            background={STYLES.colors.colorGraySecondary}
            to={`/feedback-details/${suggestion?.id}`}
          >
            Cancel
          </Navigate>
          <Button type='submit' onClick={handleSubmit}>
            Save
          </Button>
        </Style.FormControl>
      </Style.Form>
    </Style.FormContainer>
  );
};
export default FormEdit;
