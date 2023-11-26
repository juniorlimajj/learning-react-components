function Main() {
  return (
    <div className="main">
      <div className="center">
        <div className="menu">
          <div className="logo">
            <h3>Landing Page Junito</h3>
          </div>
          <div className="item-menu">
            <a href="#">Login</a>
          </div>
        </div>
      </div>
      <div className="form">
        <h2>Entre em contato</h2>
        <form>
          <div className="items-form">
            <input placeholder="Nome" type="text" />
            <input placeholder="Apelido" type="text" />
            <input placeholder="Email" type="text" />
            <input placeholder="Data de Nascimento" type="text" />
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Main;
