import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/styles/main.styl';
import SourceCard from './components/SourceCard';

const initialState = {
  "notes": [
    {
      "id": 1,
      "note": "Galjoen fish grenadier zebra tilapia yellow-eye mullet bluegill Pacific trout cat shark. Ilisha; Reef triggerfish pelican eel loosejaw tiger shark snook boafish bullhead. Bigmouth buffalo surf sardine yellow bass spadefish Black sea bass Pacific cod: banjo catfish: tenpounder Redfish ghost pipefish glassfish bonnetmouth. Swordtail. Tui chub boafish, \"sea bream inanga longnose chimaera Old World rivuline, sea chub,\" river loach ribbon eel; mustard eel."
    }
  ],
  "books": [
    {
      "id" : 1,
      "title": "De cero a uno",
      "author": "Peter Thiel",
      "Format": "audiobook",
      "cover": "url",
      "dateStart": "00/00/000",
      "dateEnd": "00/00/000",
      "tags": ["entrepreneurship", "startups", "business"],
    },
    {
      "id" : 2,
      "title": "El triunfo de las ciudades",
      "author": "Edward Glaeser",
      "Format": "paperback",
      "cover": "url",
      "dateStart": "00/00/000",
      "dateEnd": "00/00/000",
    },
    {
      "id" : 3,
      "title": "Flourish",
      "author": "Martin E. P. Seligman",
      "Format": "audiobook",
      "cover": "url",
      "dateStart": "00/00/000",
      "dateEnd": "00/00/000",
    },
    {
      "id" : 4,
      "title": "Shoe Dog",
      "author": "Phil Knight",
      "Format": "audiobook",
      "cover": "url",
      "dateStart": "00/00/000",
      "dateEnd": "00/00/000",
    },
    {
      "id" : 5,
      "title": "Learning How to Learn",
      "author": "Barbara Oakley",
      "Format": "ebook",
      "cover": "url",
      "dateStart": "00/00/000",
      "dateEnd": "00/00/000",
    },
  ]
}

ReactDOM.render(<SourceCard initialState />, document.querySelector('main'));
