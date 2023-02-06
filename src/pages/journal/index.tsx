import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { getUserMessages, getUserTags, Tag, UserMessage } from '../../services/user';
import './style.css';

function JournalPage() {
  const [messages, setMessages] = useState<UserMessage[] | null>((null));
  const [tags, setTags] = useState<Tag[] | null>((null));

  useEffect(() => {
    const messages = getUserMessages('userId');
    const tags = getUserTags('userId');

    messages.then((result) => setMessages(result));
    tags.then((result) => setTags(result));
  }, []);

  return (
    <>
      <Header title='My Journal'/>
      <div id='journal-wrapper'>
        <div className='main-content'>
          <textarea placeholder='O que aconteceu?'></textarea>

          <div className='actions-wrapper'>
            <select>
              <option value="" disabled defaultChecked>selecione uma tag</option>
              {!!tags && tags.map((tag) => <option value={tag.id}>{tag.name}</option>)}
            </select>

            <button>Salvar</button>
          </div>

          <div className='messages-wrapper'>
            {!!messages && messages.map((message) => {
              return (
                <div className='message' style={{borderColor: message?.tag?.hexColor || '#000'}}>
                  <span  className='text'>
                    <span className='icon'>&#8220;</span>
                    {message.body}
                    <span  className='icon'> &#8221;</span>
                  </span>

                  <span className='time'>{new Date().toLocaleDateString('pt-BR', {
                    hour:'numeric' ,
                    minute: 'numeric',
                  })}</span>
                </div>
              )})}
          </div>
        </div>
        <div className='aside-content'>
        {!!tags && tags.map((tag) =>
          (<div className='tag' style={{borderColor: tag.hexColor}}>
            <div className='circle' style={{backgroundColor: tag.hexColor}}></div>
            <span>{tag.name}</span>
          </div>)
        )}
        </div>
      </div>
    </>
  );
}

export default JournalPage;
