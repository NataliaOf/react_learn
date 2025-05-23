

export const Home = () =>{
 

   
     
   
return(
   <>
   <h1 className='flax'>Home Page </h1>
   

   <div>
      <h3>React Portal</h3>
      <p>
      Що таке React Portal? 
      </p>
     <p>
     React Portal дозволяє рендерити дочірні елементи в DOM-вузол, який знаходиться поза основним деревом компонентів React. Це корисно для створення модальних вікон, спливаючих підказок (tooltip), контекстних меню тощо.

       </p>
       <h3>Як працює React Portal?</h3>
       <p>
       React Portal використовує метод `ReactDOM.createPortal`, який приймає два аргументи:
        1. **Контент** – JSX, який потрібно рендерити.
         2. **Контейнер** – DOM-вузол, у який буде рендеритися контент.


       </p>
       <h3>Переваги використання React Portal </h3>
       <ol>
         <li>
         **Обхід CSS-обмежень**  
   Портали дозволяють уникнути проблем із `z-index`, оскільки модальне вікно рендериться поза основним деревом DOM.

         </li>
         <li>
         **Гнучкість**  
   Компоненти можна рендерити в будь-яке місце DOM, незалежно від їхнього місця в React-дереві.

         </li>
         <li>
         *Події бульбуються як зазвичай**  
   Події, такі як `onClick`, працюють так само, як і в основному дереві React.

         </li>

       </ol>
     <ol>
       <h3> Як створити портал? </h3>
       <li>Додати контейнер у 'index.html'</li>
       <li>Створи компонент із порталом</li>
       <li>Використовуй компонент у додатку:*</li>
    </ol> 
    <ul>
<h3>Чому це корисно?</h3>
 <li>Обхід `z-index` проблем** – модальні вікна не залежать від CSS обмежень батьківських елементів.</li>
 <li>Краща доступність** – окремий контейнер полегшує управління фокусом.</li>
 <li>Гнучкість** – компоненти можна рендерити у будь-яке місце в DOM.</li>
 
</ul>
<ul>
   <h3>Важливі моменти</h3>
   <li>`document.getElementById("modal-root")` може бути `null`, тому варто перевіряти його перед `createPortal`.</li>
   <li>Події **бульбуються** в DOM як зазвичай, тобто `onClick` працює аналогічно.</li>
   <li>Події всередині порталу**  
   Використовуй `e.stopPropagation()` для запобігання закриттю модального вікна при кліку всередині нього</li>
   <li>Анімації та стилі**  
   Для плавного відкриття/закриття модалки можна використовувати CSS-анімації або бібліотеки, такі як `framer-motion`.
</li>
   
</ul>
<ul>
   <h3>Коли використовувати React Portal?</h3>
   <li>Модальні вікна** (Modal).
</li>
   <li>Спливаючі підказки** (Tooltip)</li>
   <li>Контекстні меню** (Context Menu).
</li>
   <li>Сповіщення** (Notifications).
</li>
</ul>
  <a target="blank" href="https://react.dev/reference/react-dom/createPortal">Офіційна документація</a>

      
   </div>

   
   
   </>
)   
};
