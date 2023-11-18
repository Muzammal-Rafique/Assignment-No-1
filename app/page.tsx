import { FC } from 'react';

const HomePage: FC = () => {
  const studentsData = [
    { name: 'Ali', physics: 90, computer: 85, mathematics: 92 },
    { name: 'Asad', physics: 88, computer: 75, mathematics: 80 },
    { name: 'Hamza', physics: 95, computer: 90, mathematics: 88 },
    { name: 'Mehroz', physics: 78, computer: 82, mathematics: 85 },
    { name: 'Faisal', physics: 92, computer: 88, mathematics: 90 },
    { name: 'Adnan', physics: 85, computer: 78, mathematics: 75 },
    { name: 'Salman', physics: 85, computer: 78, mathematics: 75 },
    { name: 'Awais', physics: 85, computer: 78, mathematics: 75 },
    { name: 'Bilal', physics: 85, computer: 78, mathematics: 75 },

  ];
  const videoId = 'wLJ5_C9v1EU';
 

  return (
    <div>
      <header>
        <h1>Next.js Assignment No 1</h1>
        <nav style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
          <button  style={buttonStyle}>
            <a href="#table">Table</a>
          </button>
          <button  style={buttonStyle}>
            <a href="#form">Form</a>
          </button>
          <button  style={buttonStyle}>
            <a href="#image">Image</a>
          </button>
          <button style={buttonStyle}>
            <a href="#video">Video</a>
          </button>
          <button  style={buttonStyle}>
            <a href="#list">List</a>
          </button>
          <button  style={buttonStyle}>
            <a href="typography"> Typography</a>
          </button>
        </nav>
      </header>

      <main>
        <section id="table" style={sectionStyle}>
          <h2>Table Section</h2>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th style={tableHeaderStyle}>Student</th>
          <th style={tableHeaderStyle}>Physics</th>
          <th style={tableHeaderStyle}>Computer</th>
          <th style={tableHeaderStyle}>Mathematics</th>
        </tr>
      </thead>
      <tbody>
        {studentsData.map((student, index) => (
          <tr key={index}>
            <td style={tableCellStyle}>{student.name}</td>
            <td style={tableCellStyle}>{student.physics}</td>
            <td style={tableCellStyle}>{student.computer}</td>
            <td style={tableCellStyle}>{student.mathematics}</td>
          </tr>
        ))}
      </tbody>
    </table>
        </section>

        <section id="form" style={sectionStyle}>
          <h2>Form Section</h2>
          <form style={{ maxWidth: '400px', margin: 'auto' }}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" placeholder='name' name="name" required />

      <br />
      <label htmlFor="father">Father &apos s Name:</label>
      <input type="text" id="name" placeholder='Father s Name' name="name" required />

      <br />
      <label htmlFor="cnic">CNIC</label>
      <input type="text" id="name" placeholder='Enter Your CNIC' name="name" required />

      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" placeholder='Enter Your Email' name="email" required />

      <br />

      <label>Gender:</label>
      <div>
        <input type="radio" id="male" name="gender" value="male" />
        <label htmlFor="male">Male</label>

        <input type="radio" id="female" name="gender" value="female" />
        <label htmlFor="female">Female</label>
      </div>

      <br />

      <label>Skills:</label>
      <div>
        <input type="checkbox" id="html" name="skills" value="html" />
        <label htmlFor="html">HTML</label>

        <input type="checkbox" id="css" name="skills" value="css" />
        <label htmlFor="css">CSS</label>

        <input type="checkbox" id="js" name="skills" value="js" />
        <label htmlFor="js">JavaScript</label>
      </div>

      <br />

      <label htmlFor="country">Country:</label>
      <select id="country" name="country">
        <option value="usa">PAK</option>
        <option value="canada">IND</option>
        <option value="uk">SL</option>
      </select>

      <br />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" rows={4}></textarea>

      <br />

      <button type="submit">Submit</button>
    </form>
        </section>

        <section id="image" style={sectionStyle}>
          <h2>Image Section</h2>
          <img src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=600" alt="coding"  style={{padding: '10px' ,width:'550px',height:'400px'}}/>
          <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600" alt="coding" style={{padding: '10px' ,width:'550px',height:'400px'}}/>
          <img src="https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="coding" style={{padding: '10px',width:'550px',height:'400px'}}/>
        </section>

        <section id="video" style={sectionStyle}>
          <h2>Video Section</h2>
          <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{padding:'20px'}}
      ></iframe>
      <video width="560" height="315" controls style={{padding:'20px'}}>
        <source src="./Welcome.mp4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </section>

        <section id="list" style={sectionStyle}>
          <h2>List Section</h2>
          <h3>Unordered List of Name of Departments</h3>
      <ul>
        <li>HR</li>
        <li>Operational</li>
        <li>Research</li>
        <li>Finance</li>
      </ul>
      <h3>Ordered List of Skills</h3>
      <ol>
        <li>HTML</li>
        <li>CSS</li>
        <li>TypeScript</li>
        <li>Next JS</li>
      </ol>
        </section>

        <section id="typography" style={sectionStyle}>
          <h2>Typography Section</h2>
          <h1>This is an H1 Heading</h1>
      <h2>This is an H2 Heading</h2>
      <h3>This is an H3 Heading</h3>
      <h4>This is an H4 Heading</h4>
      <h5>This is an H5 Heading</h5>
      <h6>This is an H6 Heading</h6>

      <p>This is a paragraph. It contains some text and demonstrates the use of the &lt;p&gt; tag.</p>

      <strong>This text is strong and bold.</strong>

      <em>This text is emphasized and italicized.</em>

      <u>This text is underlined.</u>

      <blockquote>
        This is a blockquote. It is used to emphasize a section of text. This can be a long quote or a short quote.
      </blockquote>

      <code>This is inline code.</code>

      <pre>
        {`
          This is a preformatted block of text.
          It preserves both      spaces and line breaks.
        `}
      </pre>

      <hr />

      <sub>This is subscript text.</sub>
      <sup>This is superscript text.</sup>

      <abbr title="HyperText Markup Language">HTML</abbr>

      <del>This text is deleted or struck through.</del>

      <ins>This text is inserted or underlined.</ins>

      <address>
        This is an address element.
        <br />
        123 Example Street, City, Country
      </address>

      <cite>This is a citation.</cite>

      <small>This text is smaller in size.</small>

      <mark>This text is highlighted or marked.</mark>
        </section>
      </main>
    </div>
  );
};

const buttonStyle: React.CSSProperties = {
  fontSize: '35px',
  padding: '17px',
  margin: '20px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const sectionStyle: React.CSSProperties = {
  margin: '20px',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '5px',
};
const tableHeaderStyle: React.CSSProperties = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'left',
  backgroundColor: '#f2f2f2',
};

const tableCellStyle: React.CSSProperties = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'left',
};

export default HomePage;
