import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { getUserMessages, getUserTags, Tag, UserMessage } from '../../services/user';
import './style.css';

function JournalPage() {
  return (
    <>
      <Header title='My Journal' username='Henrique'/>
      
    </>
  );
}

export default JournalPage;
