import React, { Component } from 'react';
import styles from './index.scss';
import { Button } from 'boilerplate-form';
import "boilerplate-form/lib/boilerplate-form.scss";

const Index = () => (
  <div className={styles.App}>
    <header className={styles.header}>
      <img src="/static/logo.svg" className={styles.logo} alt="logo" />
      <p>
        Here we load the form from another project as dependency
      </p>
      <Button />
    </header>
  </div>
)

export default Index