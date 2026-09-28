import { useState } from 'react'
import './App.css'

function App() {
  const [video, setVideo] = useState(null)
  const [sourceLanguage, setSourceLanguage] = useState('auto')
  const [targetLanguage, setTargetLanguage] = useState('Kannada')

  const handleVideoChange = (event) => {
    const selectedVideo = event.target.files[0]

    if (selectedVideo) {
      setVideo(selectedVideo)
    }
  }

  const handleTranslate = () => {
    if (!video) {
      alert('Please upload a video first.')
      return
    }

    alert(
      `Video ready for translation!\nFrom: ${sourceLanguage}\nTo: ${targetLanguage}`,
    )
  }

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">
          🌐 <span>BhashaBridge</span>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero-section">
          <div className="hero-content">
            <div className="badge">🤖 AI-Powered Language Learning</div>

            <h1>
              Understand Every
              <span> Language.</span>
            </h1>

            <p className="hero-text">
              Convert videos into a language you understand with translated
              voice and subtitles. Learn, listen, and understand without
              language barriers.
            </p>

            <div className="translator-card">
              <h2>🎥 Translate Your Video</h2>

              <label className="upload-box">
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoChange}
                />

                <div className="upload-icon">📁</div>

                {video ? (
                  <>
                    <strong>{video.name}</strong>
                    <small>Video selected successfully</small>
                  </>
                ) : (
                  <>
                    <strong>Choose a video</strong>
                    <small>MP4, MOV, AVI and other video formats</small>
                  </>
                )}
              </label>

              <div className="language-row">
                <div className="language-field">
                  <label>Video Language</label>

                  <select
                    value={sourceLanguage}
                    onChange={(e) => setSourceLanguage(e.target.value)}
                  >
                    <option value="auto">🔍 Auto Detect</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Kannada">Kannada</option>
                    <option value="Telugu">Telugu</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Malayalam">Malayalam</option>
                    <option value="Marathi">Marathi</option>
                    <option value="Bengali">Bengali</option>
                  </select>
                </div>

                <div className="arrow">→</div>

                <div className="language-field">
                  <label>Understanding Language</label>

                  <select
                    value={targetLanguage}
                    onChange={(e) => setTargetLanguage(e.target.value)}
                  >
                    <option value="Kannada">🇮🇳 Kannada</option>
                    <option value="English">🇬🇧 English</option>
                    <option value="Hindi">🇮🇳 Hindi</option>
                    <option value="Telugu">🇮🇳 Telugu</option>
                    <option value="Tamil">🇮🇳 Tamil</option>
                    <option value="Malayalam">🇮🇳 Malayalam</option>
                    <option value="Marathi">🇮🇳 Marathi</option>
                    <option value="Bengali">🇮🇳 Bengali</option>
                  </select>
                </div>
              </div>

              <button className="translate-button" onClick={handleTranslate}>
                🚀 Translate Video
              </button>

              <p className="privacy-text">
                🔒 Your video is processed securely.
              </p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="features-section">
          <h2>How BhashaBridge Works</h2>

          <p className="section-description">
            Three simple steps to understand videos in your preferred language.
          </p>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🎥</div>
              <h3>1. Upload Video</h3>
              <p>
                Upload an educational, conversation, or important video that
                you want to understand.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>2. AI Translation</h3>
              <p>
                AI recognizes the speech, translates it, and prepares the
                translated voice and subtitles.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔊</div>
              <h3>3. Listen & Learn</h3>
              <p>
                Watch the video with translated voice and subtitles in the
                language you understand.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <h2>Breaking Language Barriers 🌍</h2>

          <p>
            BhashaBridge helps students and learners understand useful
            information even when it is available in a language they don't
            know.
          </p>
        </section>
      </main>

      <footer>
        <p>© 2026 BhashaBridge • Learn Without Language Barriers</p>
      </footer>
    </div>
  )
}

export default App