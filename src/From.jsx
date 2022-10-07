import _ from './Form.module.css';

export const Form = () => {
  
  return (
    <form className={_.form}>

      <div className={_.wrap}>
        <label className={_.label} htmlFor='email'>Email</label>
        <input className={_.input} type='text' id='email' name='email'/>
        <p className={_.error}>Сообщение об ошибке</p>
      </div>

      <div className={_.wrap}>
        <label className={_.label} htmlFor='password'>Пароль</label>
        <input className={_.input} type='password' id='password' name='password'/>
        <p className={_.error}>Сообщение об ошибке</p>
      </div>

      <div className={_.wrapCheckbox}>
        <input className={_.checkbox} type='checkbox' id='save' name='save'/>
        <label className={_.labelCheckbox} htmlFor='save'>Сохранить пароль</label>
      </div>

      <button className={_.submit} type='submit'>Войти</button>
    </form>
  );
};