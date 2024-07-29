import React, { useState, useEffect } from 'react';

const Browsing = () => {
    const [samples, setSamples] = useState([]);
    const [chromosomes, setChromosomes] = useState([]);
    const [alleles, setAlleles] = useState([]);
    const [positions, setPositions] = useState([]);
    const [selectedSample, setSelectedSample] = useState('');
    const [selectedChromosome, setSelectedChromosome] = useState('');
    const [selectedAllele, setSelectedAllele] = useState('');
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        const savedSamples = JSON.parse(localStorage.getItem('samples')) || [];
        const savedChromosomes = JSON.parse(localStorage.getItem('chromosomes')) || [];
        const savedAlleles = JSON.parse(localStorage.getItem('alleles')) || [];
        const savedPositions = JSON.parse(localStorage.getItem('positions')) || [];

        setSamples(savedSamples);
        setChromosomes(savedChromosomes);
        setAlleles(savedAlleles);
        setPositions(savedPositions);

        console.log('Loaded Samples:', savedSamples);
        console.log('Loaded Chromosomes:', savedChromosomes);
        console.log('Loaded Alleles:', savedAlleles);
        console.log('Loaded Positions:', savedPositions);
    }, []);

    const handleDisplay = () => {
        setDisplayText(`Sample: ${selectedSample}, Chromosome: ${selectedChromosome}, Allele: ${selectedAllele}`);
    };

    return (
        <div className="browse">
            <h1>Browse VCF Data</h1>
            <p>Select a sample from the list below, then choose the chromosome and allele you want to view. The text will be displayed in the browsing window, and you can save the content as a text file if needed.</p>

            <div className="step-instruct">
                <h2>Step 1: Select Sample</h2>
                <label htmlFor="select-samp">Drop Down:</label>
                <select
                    name="select-samp"
                    id="select-samp"
                    className="select-samp"
                    value={selectedSample}
                    onChange={(e) => setSelectedSample(e.target.value)}
                >
                    <option>Select</option>
                    {samples.map((sample, index) => (
                        <option key={index} value={sample}>{sample}</option>
                    ))}
                </select>

                <h2>Step 2: Select Chromosome</h2>
                <label htmlFor="select-chrom">Drop Down:</label>
                <select
                    name="select-chrom"
                    id="select-chrom"
                    className="select-chrom"
                    value={selectedChromosome}
                    onChange={(e) => setSelectedChromosome(e.target.value)}
                >
                    <option>Select</option>
                    {chromosomes.map((chrom, index) => (
                        <option key={index} value={chrom}>{chrom}</option>
                    ))}
                </select>

                <h2>Step 3: Select Allele</h2>
                <label htmlFor="select-all">Drop Down:</label>
                <select
                    name="select-all"
                    id="select-all"
                    className="select-all"
                    value={selectedAllele}
                    onChange={(e) => setSelectedAllele(e.target.value)}
                >
                    <option>Select</option>
                    {alleles.map((allele, index) => (
                        <option key={index} value={allele}>{allele}</option>
                    ))}
                </select>
                <br />
                <button onClick={handleDisplay}>Display</button>
            </div>

            <div className="browser-display">
                <h2>Browsing Window</h2>
                <textarea
                    name="browse-w"
                    id="browse-w"
                    className="browse-w"
                    value={displayText}
                    readOnly
                ></textarea>
                <br />
                <button>Save</button>
            </div>
        </div>
    );
}

export default Browsing;
