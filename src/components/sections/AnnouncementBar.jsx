import React from 'react';
import { colors } from '../../constants/colors';

const AnnouncementBar = () => {
    return (
        <div
            className="py-2 px-4 text-center"
            style={{ backgroundColor: colors.cyan }}
        >
            <p
                className="body-font text-sm font-semibold"
                style={{ color: 'white' }}
            >
                🐕 Last-minute slots available this week! <a href="#" className="underline">Book now →</a>
            </p>
        </div>
    );
};

export default AnnouncementBar;
