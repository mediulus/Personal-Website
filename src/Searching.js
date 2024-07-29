import React, { useState, useEffect } from 'react';

const Searching = () => {
    const [pattern, setPattern] = useState('');
    const [sample, setSample] = useState('');
    const [chrom, setChrom] = useState('');
    const [allele, setAllele] = useState('');
    const [pos, setPos] = useState('');
    const [directories, setDirectories] = useState([]);

    useEffect(() => {
        const savedDirectories = JSON.parse(localStorage.getItem('directories')) || [];
        setDirectories(savedDirectories);
    }, []);

    useEffect(() => {
        console.log(sample);
        console.log(chrom);
        console.log(allele);
        console.log(pos);
    }, [pattern, chrom, allele, pos]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(pattern);
        setSample('sample');
        setChrom('chrom');
        setAllele('allele');
        setPos('position');

        const savedSamples = JSON.parse(localStorage.getItem('samples')) || [];
        const savedChroms = JSON.parse(localStorage.getItem('chromosomes')) || [];
        const savedAlleles = JSON.parse(localStorage.getItem('alleles')) || [];
        const savedPositions = JSON.parse(localStorage.getItem('positions')) || [];

        if (!savedSamples.includes(sample)) {
            savedSamples.push(sample);
        }
        if (!savedChroms.includes(chrom)) {
            savedChroms.push(chrom);
        }
        if (!savedAlleles.includes(allele)) {
            savedAlleles.push(allele);
        }
        if (!savedPositions.includes(pos)) {
            savedPositions.push(pos);
        }

        localStorage.setItem('samples', JSON.stringify(savedSamples));
        localStorage.setItem('chromosomes', JSON.stringify(savedChroms));
        localStorage.setItem('alleles', JSON.stringify(savedAlleles));
        localStorage.setItem('positions', JSON.stringify(savedPositions));

        console.log('Saved Samples:', savedSamples);
        console.log('Saved Chromosomes:', savedChroms);
        console.log('Saved Alleles:', savedAlleles);
        console.log('Saved Positions:', savedPositions);
    }

    return (
        <div className="search">
            <h1>Search the Index</h1>
            <div className="instructions">
                <ol>
                    <li className="first">Submit directory to the 'Index' Page.</li>
                    <li>If multiple directories have been submitted, select which directory</li>
                    <li>Input the search pattern that you are interested in.</li>
                </ol>
            </div>

            <div className="select">
                <div className="dir">
                    <label htmlFor="directory">Directory:</label>
                    <select name="directory" id='directory' className="directory">
                        <option>Select</option>
                        {directories.map((dir, index) => (
                            <option key={index} value={dir}>{dir}</option>
                        ))}
                    </select>
                </div>

                <form className="pattern-form" onSubmit={handleSubmit}>
                    <label htmlFor="pattern">Search Pattern:</label>
                    <input
                        id='pattern'
                        name='pattern'
                        type="text"
                        className="pattern"
                        placeholder="Input Search Pattern"
                        value={pattern}
                        onChange={(e) => setPattern(e.target.value)} />

                    <button className="ss">Save and Search</button>
                </form>
            </div>

            <div className="search-results">
                <h2>Results Display:</h2>

                <div className="sample">
                    <form>
                        <label htmlFor='sample'>Sample:</label>
                        <input value={sample} type="text" id='sample' name='sample' className="sampler" />
                    </form>
                </div>

                <div className="details">
                    <form>
                        <label htmlFor='chrom'>Chromosome:</label>
                        <input value={chrom} type="text" id='chrom' name='chrom' className="chrom" />
                    </form>
                    <form>
                        <label htmlFor='allele'>Allele:</label>
                        <input value={allele} type="text" id='allele' name='allele' className="allele" />
                    </form>
                    <form>
                        <label htmlFor='pos'>Position:</label>
                        <input value={pos} type="text" id='pos' name='pos' className="pos" />
                    </form>
                </div>

                <div className="save">
                    <button type="button">Save</button>
                </div>

                <hr className="line" />
                <div className="help">
                    <h3>Help and Documentation</h3>
                    <p>For detailed instructions on how to use this tool, refer to our documentation</p>
                </div>
            </div>
        </div>
    );
}

export default Searching;
