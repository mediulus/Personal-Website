import React, { useState, useEffect } from 'react';

const Indexing = () => {
    const [directory, setDirectory] = useState('');
    const [logOutput, setLogOutput] = useState('');
    const [samples, setSamples] = useState('');
    const [records, setRecords] = useState('');
    const [edits, setEdits] = useState('');
    const [processed, setProcessed] = useState('');
    const [generated, setGenerated] = useState('');
    const [directories, setDirectories] = useState([]);

    useEffect(() => {
        console.log(logOutput);
        console.log(samples);
        console.log(edits);
        console.log(records);
        console.log(processed);
        console.log(generated);
    }, [logOutput, samples, edits, records, processed, generated]);

    useEffect(() => {
        const savedDirectories = JSON.parse(localStorage.getItem('directories')) || [];
        setDirectories(savedDirectories);
    }, []);

    const handleStart = () => {
        setLogOutput('Log Output');
        setSamples('samples');
        setRecords('records');
        setEdits('edits');
        setProcessed('processed');
        setGenerated('generated');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(directory);
        const newDirectories = [...directories, directory];
        setDirectories(newDirectories);
        localStorage.setItem('directories', JSON.stringify(newDirectories));
    }

    return ( 
        <div className="index">
            <h1>Index Your VCF Files</h1>
            <p className="index-directions">Welcome to the indexing section of our VCF File Handling Tool. Here, you can easily create an index from your VCF files to facilitate fast and efficient searches and browsing. Follow the steps below to get started:</p>
            
            <div className="steps">
                <div className="step-1">
                    <h2>Step 1: Select Directory</h2>
                    <p>Input the directory containing your VCF files:</p>
                    <form onSubmit={handleSubmit}>
                        <input 
                            className='input-directory' 
                            type="text" 
                            placeholder="Directory"
                            value={directory}
                            onChange={(e) => setDirectory(e.target.value)}
                        />
                        <button>Save</button>
                    </form>
                </div>

                <div className="step-2">
                    <h2>Step 2: Start Indexing</h2>
                    <p>Once you have inputed your directory, click the button below to start the indexing process:</p>
                    <button 
                        onClick={handleStart}
                        type="button"
                    >Start</button>
                </div>
            
                <div className="log-output">
                    <h2>Log Output:</h2>
                    <textarea 
                        value={logOutput} 
                        readOnly 
                        className="output-box"
                    />
                </div>

                <div className="index-results">
                    <h2>Results:</h2>
                    <form>
                        <label htmlFor='samples'>Number of Identified Samples:</label>
                        <input type="text" id='samples' name='samples' className="samples" value={samples}/>
                    </form>
                    <form>
                        <label htmlFor='dropped'>Number of Dropped Records:</label>
                        <input type="text" id='dropped' name='dropped' className="dropped" value={records}/>
                    </form>
                    <form>
                        <label htmlFor='valid'>Number of Valid Edits Captured:</label>
                        <input type="text" id='valid' name='valid' className="valid" value={edits}/>
                    </form>
                    <form>
                        <label htmlFor='processed'>File Size Processed:</label>
                        <input type="text" id='processed' name='processed' className="processed" value={processed}/>
                    </form>
                    <form>
                        <label htmlFor='generated'>Size of Parsed File Generated:</label>
                        <input type="text" id='generated' name='generated' className="generated" value={generated}/>
                    </form>
                </div>

                <div className="save">
                    <button type="button">Save</button>
                </div>
            </div>

            <hr className="line"/>
            
            <div className="help">
                <h3>Help and Documentation</h3>
                <p>For detailed instructions on how to use this tool, refer to our documentation</p>
            </div>
        </div>
    );
}

export default Indexing;
