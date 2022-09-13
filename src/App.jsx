import React from 'react';

function App() {
  /*
  TODO:
  []test responsiveness on mobile
  */
  return (
    <main>
      <header className='container--padding-util'>
        <h1>WELCOME 2 KNITTING BUDDY</h1>
        <div className='brand'>
          <img src="src\assets\mellow-online-knitting-lesson.png" alt="logo" />
          <span className='image--caption-util'>Illustration by <a href="https://icons8.com/illustrations/author/kP9rc8JiBCcz">Irene M. Ray</a> from <a href="https://icons8.com/illustrations">Ouch!</a></span>
        </div>
      </header>

      <section className="intro">
        <p>Welcome here! This is a project made to be used as a simple tool while knitting your cool projects! To use, just fill in the form with what stitch pattern you need,and how ever many rounds you need for your project. If you're on desktop, you hit the <u className='intro--important'>space bar</u> to continue to the next round. Soon I hope to add more advanced functionality, so stay tuned!</p>
        <div className='img-1'>
          <img src="src\assets\sewing-project.png" alt='sewing project' />
          <span className="image--caption-util">Illustration by <a href="https://icons8.com/illustrations/author/kP9rc8JiBCcz">Irene M. Ray</a> from <a href="https://icons8.com/illustrations">Ouch!</a></span>
        </div>
      </section>

      <section className="knitting-buddy container--padding-util">
        <div className="canvas"></div>

        <form>
          <label htmlFor="patternReminder">
            Pattern reminder?
          </label>
          <input type="text" name='patternReminder' id='patternReminder' placeholder='purl 2 knit 2' />


          <label htmlFor="intervals">
            Interval?
          </label>
          <input type="number" name='intervals' id='intervals' placeholder='2' min='2' />

          <button>Lets begin!</button>
        </form>
      </section>
    </main>
  );
}

export default App;