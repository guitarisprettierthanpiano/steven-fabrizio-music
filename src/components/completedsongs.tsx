import * as React from 'react';

const CompletedSongs: React.FC = () => {
    
    return(
        <div>
            <audio controls>
                <source src='src\components\1-03 Spartacus Love Theme.mp3' type='audio/mpeg'></source>
            </audio>
        </div>
    );
};

export default CompletedSongs;