import { Link } from 'react-router-dom';
import '../App.css';






function QuitButton() {
  return (
    <Link to='../'>
      <button className="bg-gentle-600 text-white py-4 px-10 text-xl rounded-full border-4 border-gentle-500">Exit Tutorial</button>
    </Link>
  );
}




var textFile = null,
makeTextFile = function (text) {
  var data = new Blob([text], {type: 'text/plain'});

  // If we are replacing a previously generated file we need to
  // manually revoke the object URL to avoid memory leaks.
  if (textFile !== null) {
    window.URL.revokeObjectURL(textFile);
  }

  textFile = window.URL.createObjectURL(data);

  return textFile;
};



function exportLogTutorial() {

  let toReturn = `-- gentleTranscendent [GT] began pestering tomboyGangster [TG] --\r
\r
TG: hey did you hear about that new tool\r
TG: the one that does the bbcode color formatting for you\r
GT: Yeah! I did, it seems like a real time saver.\r
TG: yeah no shit\r
TG: theres a lot of people that spend way too much time using MSPFA's clunky editor from the 90s to manually add character colors\r
GT: Glad there's finally a good solution for that.\r
\r
-- tomboyGangster [TG] ceased pestering gentleTranscendent [GT] --`;


  var link=document.createElement('a');
    link.href = makeTextFile(toReturn);
    link.download = "example_pesterlog.txt";
    link.click();
}



function exportCharTutorial() {

  let toReturn = `TT|#600505|traditionalTerror\r
GT|#AF59FF|gentleTranscendent\r
TG|#01C7FC|tomboyGangster\r
GG|#4E7A27|guiltlessGraffiti`;


  var link=document.createElement('a');
    link.href = makeTextFile(toReturn);
    link.download = "example_chardata.txt";
    link.click();
}






export default function Tutorial() {
  return (
    <div className="App">
      <div className="bg-gentle-700 pt-5 pb-20 text-white max-w-">

        <h1>Pesterlog Processing Tutorial</h1>

        <h2 className="mt-5">Pesterlog Input:</h2>

        <h3>
          <p>The .txt file that you provide should follow Homestuck's pesterlog format.</p>
          <p>Here is a template of how this should look:</p>
        </h3>


        <div id="logbox" className="bg-gray-200 text-black my-2">
            <p>-- firstHandle [XX] began pestering secondHandle [YY] --</p>
            <p>XX: this is the first line of dialog</p>
            <p>XX: this is the second line of dialog</p>
            <p>YY: this is the third line of dialog</p>
            <p>XX: this is the fourth line of dialog</p>
            <p>-- firstHandle [XX] ceased pestering secondHandle [YY] --</p>
        </div>

        
        <div>
          <h3>
            <p>"firstHandle" and "secondHandle" are the Chumhandles of your characters. These can be anything but the Tag will generally be its abbreviation.</p>
            <p>Each line of dialog needs to begin with a Tag, and all characters in a log must have a unique Tag.</p>
            <p>If two characters have the same abbreviation, before processing, choose a character and replace all instances of their Tag in the .txt with a unique placeholder Tag, then change it back after processing.</p>
            <p>The header and footer can contain anything as long as they begin with "--" and any Tags are in format "[XX]".</p>
            <p>Each line technically ends with a "\r\n". If your import refuses to split into multiple lines, this may be why. Adding the \r should fix it.</p>
          </h3>
        </div>
        


        <button onClick={() => exportLogTutorial()} className="bg-mountain-meadow-400 text-white py-1 px-5 my-10 mx-10 text-xl rounded-full border-4 border-mountain-meadow-500">
          Download Example Input Log
        </button>


        <h2>Character data import:</h2>
  
        <div>
          <h3>
            <p>Character data can be added in two ways. The user can enter it manually using the three data input fields, or using the "Import Character Data" button, they can reuse use previously exported character data.</p>
            <p>If the user would like to manually assemble this character data, they can either use the input fields in this program or create a .txt file following this format:</p>
          </h3>
        </div>

        <div className="bg-gray-200 text-black my-2">
            <p>XX|#FFFFFF|chumHandle</p>
            <p>YY|#000000|anotherHandle</p>
        </div>
        
        <div>
          <h3>
            <p>where "XX" is a unique two-character capitalized Tag, #FFFFFF is any valid hex color code, and chumHandle is the name of the character. Each character should be on its own line of the .txt file.</p>
            <p>Characters can easily be added to a preexisting character data file by importing character data, using this program's character adding tool, and exporting for later use.</p>
            <p>Each line technically ends with a "\r\n". If your import refuses to split into multiple lines, this may be why. Adding the \r should fix it.</p>
          </h3>
        </div>


        <button onClick={() => exportCharTutorial()} className="bg-mountain-meadow-400 text-white py-1 px-5 my-10 mx-10 text-xl rounded-full border-4 border-mountain-meadow-500">
          Download Example Input Character Data
        </button>

        
        <div className="mb-10">
          <h3>
            <p>Once a log has been imported and character data has been added, the Pesterlog Preview will color each line. Once satisfied with its appearance, the user can click "Export Pesterlog" to download the colored log.</p>
            <p>Its contents can then be pasted directly into an <a href="https://mspfa.com/" target="_blank" className="text-mountain-meadow-300">mspfa.com</a> comic page or any other BBCode-using platform for gorgeous colored text!</p>
          </h3>
        </div>


        <QuitButton />

      </div>
    </div>
  );
}

