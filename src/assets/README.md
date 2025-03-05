# Mel's drive-in design 

## Design principles

[Link to Figma-file](https://www.figma.com/design/2fdQ9ywCdZQIs0DBnaXJnK/Design-file?node-id=1-73&t=Ovd2gA49LelwQEly-1)

Overview of designs for pages are available in `/assets/designs/`.
All colours are defined in the Colours.png, as well as the "Graphic design"-page in the Figma-file.

The background of the page is Mel's black. 

The sections of the page has an assymmetrical border radius with an inner border of neon teal. 

Margins for body is 16px, and margin between elements is 16px in mobile and 24px in tablet and desktop. 

Font styles are defined in the "Graphic design"-page in the Figma-file.
The fonts used are:
- [Grand Hotel](https://fonts.google.com/specimen/Grand+Hotel)
- [Tilt neon](https://fonts.google.com/specimen/Tilt+Neon)

Movie info compiled from IMDB and movie assets are available in `/assets/movies/`.  

## Responsive design
The design contains 4 layouts for a responsive design - mobile, tablet, small desktop, and large desktop. The small desktop design is also used for tablets in landscape mode. 

### Mobile
The mobile design is one column. 
It has a sticky header that uses a burger menu which opens an overlay to reach the menu. 

The movie section shows one movie at a time as a card, with the option to swipe left or right to view the other available movies as a carousel. 

### Tablet
The tablet design is similar to the mobile design, but its header has the menu options written out instead of the overlay. 

The movie section highlights one of the movies with some of the details of the movie written out, and has a carousel underneath it with the other available movies as cards. 

### Desktop small
The header has the menu options written out like the tablet design.

The movie section highlights one of the movies with some of the details of the movie written out, and has the other available movies shown as cards next to it. The highlighted movie is located on the left, with the other movies to the right. 

### Desktop large
The design is identical to the desktop small design, but has gutters on the side to make up for the extra space.

## Animations 
### Header 
When navigating the site, the current page the user is on should be highlighted by being underlined and neon teal. 

### Buttons
Buttons should light up when hovering and pressing them, refer to Figma-file for the different states. 

### Movie cards
When hovering over the cards that displays the movies available, the movie poster should blur and an overlay is applied over it. The overlay darkens the background to make the white text more readable. Refer to Figma-file for the different states. 

Carousel in mobile and tablet should be animated so that the new movies shown are sliding in as the user swipes. 

### Cookie bar
The cookie bar should be sticky and located at the bottom of the display until disabled. 