
function App() {
  return (
   <div>
      <div>Hello React</div>
      <h1>안녕하세요!</h1>
      <h2>음.. 쉽지 않군요..</h2>
      <h3>공부를 많이 해야겠어요</h3>

      <form>
        <h3>입력해보아요</h3>
        <div>
          <label for="user_name">이름이 뭐에요?</label>  
          <input type="text" id="user_name"></input>
        </div>
      </form>
    </div>
  );
}

export default App;
