const imgArr = [
  {
    src: 'agaeta01.jpeg',
    title: 'Summasummasumma',
  },
  {
    src: 'agaeta02.jpeg',
    title: 'Summasummasumma1',
  },
  {
    src: 'confital01.jpeg',
    title: 'Summasummasumma2',
  },
  {
    src: 'dessert01.jpeg',
    title: 'Summasummasumma3',
  },
  {
    src: 'laaldea01.jpeg',
    title: 'Summasummasumma4',
  },
  {
    src: 'laaldea02.jpeg',
    title: 'Summasummasumma5',
  },
  {
    src: 'lascanteras01.jpeg',
    title: 'Summasummasumma6',
  },
  {
    src: 'lascanteras02.jpeg',
    title: 'Summasummasumma7',
  },
  {
    src: 'laspalmas01.jpeg',
    title: 'Summasummasumma8',
  },
  {
    src: 'mogan01.jpeg',
    title: 'Summasummasumma9',
  },
  {
    src: 'mogan02.jpeg',
    title: 'Summasummasumma10',
  },
  {
    src: 'mountains01.jpeg',
    title: 'Summasummasumma11',
  },
  {
    src: 'mountains02.jpeg',
    title: 'Summasummasumma12',
  },
  {
    src: 'mountains03.jpeg',
    title: 'Summasummasumma13',
  },
  {
    src: 'mountains04.jpeg',
    title: 'Summasummasumma14',
  },
  {
    src: 'mountains05.jpeg',
    title: 'Summasummasumma15',
  },
];

imgArr.forEach((el) => {
  const div = document.createElement('div');
  const figure = document.createElement('figure');
  const img = document.createElement('img');
  const title = document.createElement('caption');

  div.appendChild(figure);

  img.src = `./images/gallery/small/${el.src}`;
  img.alt = el.title;
  title.textContent = el.title;

  figure.appendChild(img);
  figure.appendChild(title);

  const gallery = document.getElementById('gallery');
  gallery.appendChild(div);
});

const images = Array.from(document.querySelectorAll('img'));

document.addEventListener('DOMContentLoaded', () => {
  /* images.forEach((el) => {
    el.addEventListener('click', () => {
      const dialog = document.createElement('dialog');
      const img = document.createElement('img');
      const gallery = document.getElementById('gallery');
      dialog.classList.add('lightbox');
      dialog.classList.add('active');
      img.src = `./images/gallery/${imgArr[images.indexOf(el)].src}`;
      console.log(img.src);
      dialog.appendChild(img);

      gallery.appendChild(dialog);

      dialog.showModal();

      dialog.addEventListener('click', () => {
        dialog.close();
        dialog.remove();
      });
    });
  });
 */

  const imgElements = Array.from(document.querySelectorAll('img')); // array'viderci

  //skaber vores div og giver den classes
  const modalDiv = document.createElement('div');
  modalDiv.classList.add('lightbox');
  document.body.append(modalDiv);

  //åbner modalen og smider en klon af billedet i (i fås fra )
  const openModal = (i) => {
    const imgClone = imgElements[i].cloneNode();
    modalDiv.innerHTML = '';
    modalDiv.append(imgClone);
    modalDiv.classList.add('active');
  };

  //lukker modalen
  const closeModal = () => {
    modalDiv.classList.remove('active');
  };

  //giver hvert billede en click eventlistener der triggerer åbenmodalen
  imgElements.forEach((img, i) => {
    img.addEventListener('click', () => openModal(i));
  });
  //giver modalen et click der lukker
  modalDiv.addEventListener('click', () => closeModal());
});

document.addEventListener('DOMContentLoaded', () => {
  const imgElements = Array.from(document.querySelectorAll('img'));

  const modalDiv = document.createElement('div');
  modalDiv.classList.add('lightbox');
  document.body.append(modalDiv);

  const openModal = (i) => {
    const imgClone = imgElements[i].cloneNode();
    modalDiv.innerHTML = '';
    modalDiv.append(imgClone);

    modalDiv.classList.add('active');
  };

  const closeModal = () => {
    modalDiv.classList.remove('active');
  };

  imgElements.forEach((img, i) => {
    img.addEventListener('click', () => openModal(i));
  });

  modalDiv.addEventListener('click', () => closeModal());
});
