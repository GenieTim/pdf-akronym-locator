# pdf-akronym-locator
Locate some acronyms in a PDF and output their locations to a CSV.

This is a very simple and hacky tool I used once to quickly get a summary and index of some lecture material.

## Installation

1. Clone this repository
2. Install pdfgrep
     - install on Ubuntu/Debian with `sudo apt-get install pdfgrep`
     - install on MacOS via homebrew: `brew install pdfgrep`

## Usage

First, prepare a CSV file (just comma-separate the acronyms you are looking for).
Then run `./locate.sh <stringscsvfile> <pdffile[]>`, 
where `<stringscsvfile>` has to be replaced by the path to the created CSV file, 
and `<pdffile[]>` shall be replaced by one or more (space separated) paths to the PDF files to search for the acronyms.

Use a redirect to create a CSV file with the results, i.e. `./locate.sh <stringscsvfile> <pdffile[]> > results.csv`.

If you also want to post-process the results, 
namely shorten the source file (PDF) names in all CSV rows,
run `yarn install` or `npm install`, 
adjust `converter.js` as described in the file itself
and then run `./converter.js`.
