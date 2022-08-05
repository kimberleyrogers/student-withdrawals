import { useEffect, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import './form.css';
import { PDFFile } from './PDF';

// Form for user to complete

export function Form() {

    // state for form fields
    const [wdType, setWdType] = useState('');
    const [wdDate, setWdDate] = useState('');
    const [wdReason, setWdReason] = useState('')
    const [cpnTrainer, setCpnTrainer] = useState('')
    const [cpnComments, setCpnComments] = useState('');
   
    return (

        <div>
        <form >
            <h2>withdrawal information</h2>
            <label>
                type of withdrawal
                <select>
                    <option value='formal'>formal</option>
                    <option value='apparent'>apparent</option>
                    onChange ={(e) => setWdType(e.target.value)}
                </select>
            </label>
            <label>
                date
                <textarea 
                    type="date"
                    required
                    value={wdDate}
                    onChange ={(e) => setWdDate(e.target.value)}
                />
            </label>
            <label>
                reason for withdrawal
                <textarea 
                    type="text"
                    required
                    value={wdReason}
                    onChange ={(e) => setWdReason(e.target.value)}
                />
            </label>
            <label>
                trainer
                <input 
                    type="text"
                    required
                    value={cpnTrainer}
                    onChange ={(e) => setCpnTrainer(e.target.value)}
                />
            </label>
           
            <input id='form-submit-button' type="submit" />
        </form>

        <PDFFile />
        <PDFDownloadLink document={<PDFFile />} filename="Withdrawal Form - Student Name - Student Number">
            {({loading}) => (loading ? (<button>Loading document...</button>) : (<button>Download</button>))}
        </PDFDownloadLink> 
        </div>
    )
}
