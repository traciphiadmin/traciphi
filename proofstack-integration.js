// Example: Call ProofStack API from your website
async function auditDocument(deliverableText, sourcesJson) {
    const response = await fetch('http://127.0.0.1:8000/audit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            deliverable_text: deliverableText,
            source_documents: JSON.parse(sourcesJson),
            strictness: 'boardroom',
            internet_search: true
        })
    });
    
    if (!response.ok) {
        throw new Error('Audit failed');
    }
    
    return await response.json();
}

// Usage in your website:
document.getElementById('auditButton').addEventListener('click', async () => {
    const text = document.getElementById('deliverable').value;
    const sources = document.getElementById('sources').value;
    
    try {
        const result = await auditDocument(text, sources);
        document.getElementById('result').innerHTML = `
            <h3>Verdict: ${result.document_verdict}</h3>
            <p>Trust Score: ${result.trust_score}%</p>
            <p>${result.executive_summary}</p>
        `;
    } catch (error) {
        console.error('Error:', error);
    }
});