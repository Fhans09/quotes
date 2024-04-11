const quotes = [
  {
    text: "The best way to predict your future is to create it.",
    author: "Abraham Lincoln"
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    author: "Christian D. Larson"
  },
  {
    text: "If you can dream it, you can achieve it.",
    author: "Zig Ziglar"
  },
  {
    text: "Terkadang Kita Dapat Menemukan Hal Baik Ditempat Yang Buruk.",
    author: "My Quotes By Han"
  },
  {
    text: "Banyak Manusia Yang Mengira Banyak Memiliki Waktu , Padahal Kematian Sudah Didepan Matanya",
    author: "My Quotes By Han"
  },
  {
    text: "Orang bodoh selalu berpikir ia bijak, tetapi orang bijak tahu bahwa dirinya adalah seorang bodoh.",
    author: "William Shakespeare"
  },
  {
    text: "Berpikirlah menurut dirimu sendiri dan biarkan orang lain berpikir menurut diri mereka.",
    author: "Voltaire"
  },
  {
    text: "Hargai dia yang membencimu karena dia adalah penggemar yang telah menghabiskan waktunya hanya untuk melihat setiap kesalahanmu.",
    author: "My Quotes By Han"
  },
  {
    text: "Jangan takut untuk berkata 'tidak' pada sesuatu yang tidak sesuai dengan nilai dan prinsip hidupmu.",
    author: "My Quotes By Han"
  },
  {
    text: "sebuah pekerjaan yang paling tidak pernah kunjung Dapat diselesaikan yaitu pekerjaan yang tak kunjung pernah dimulai.",
    author: "JRR Tolkien"
  },
  {
    text: "Kepanikan merupakan separuh penyakit. Ketenangan menjadi separuh obat, dan kesabaran adalah sebuah permulaan kesembuhan.",
    author: "Ibnu Sina"
  },
  {
    text: "Lebih baik menjadi singa sehari daripada jadi kambing seumur hidup.",
    author: "Elizabeth Kenny"
  },
  {
    text: "Sebab hidup terlalu singkat untuk membiarkan orang lain menentukan apa yang membuat kita bahagia.",
    author: "Ernest Prakasa"
  },
  {
    text: "Sebuah kapal pasti aman di tepi pantai, tetapi bukan untuk itu tujuannya dibuat.",
    author: "Albert Einstein"
  },
  {
    text: "Jangan pernah mendahului apa yang akan terjadi dengan berkata tidak mampu, tidak sanggup, tidak kuat sebelum ada usaha untuk menjadikan dirimu menjadi mampu, sanggup, serta kuat.",
    author: "My Quotes By Han"
  }, {
    text: "Jika kamu selalu mencoba untuk menjadi normal, kamu tidak akan pernah tahu betapa menakjubkannya dirimu.",
    author: "Maya Angelou"
  },
  {
    text: "Tidak semua orang akan memahami bagaimana perjalananmu. Tidak apa-apa. Kamu hidup untuk kehidupanmu sendiri, bukan untuk membuat orang lain mengerti.",
    author: "Guest 49572321"
  },
  {
    text: "Kamu tidak bisa pergi dan mengubah awalannya. Tapi, kamu dapat memulai dimana kamu berada dan mengubah akhirannya.",
    author: "C.S. Lewis"
  },
  {
    text: "You will never reach your destination, if you stop and throw stones at every dog that barks.",
    author: "Winston C"
  },
  {
    text: "Sebagian besar masalah dalam hidup kita adalah karena dua alasan: kita bertindak tanpa berpikir atau kita terus berpikir tanpa bertindak.",
    author: "Guest 9542354"
  },
  {
    text: "Semua orang itu jenius. Namun, jika kamu menilai seekor ikan berdasarkan pada kemampuannya memanjat pohon, maka seumur hidup dirinya akan percaya bahwa dirinya adalah bodoh.",
    author: "Albert Einstein"
  },
  {
    text: "Satu-satunya orang yang harus kamu coba adalah untuk menjadi lebih baik dari dirimu di hari kemarin",
    author: "Matty Mullins"
  },
  {
    text: "Apa pun yang membuat Anda tersenyum, pertahankan. Apa pun yang membuat Anda sedih, tinggalkan.",
    author: "Mario Teguh"
  },
  {
    text: "Kadang, yang terindah tak diciptakan untuk dimiliki. Cukup dipandangi dari jauh, lalu syukuri bahwa ia ada di sana untuk dikagumi dalam diam.",
    author: "Fiersa Besari"
  },
  {
    text: "Rasa bahagia dan tak bahagia bukan berasal dari apa yang kamu miliki, bukan pula berasal dari siapa diri kamu, atau apa yang kamu kerjakan. Bahagia dan tak bahagia berasal dari pikiran kamu.",
    author: "Dale Carnegie"
  },
  {
    text: "Kejujuran adalah batu penjuru dari segala kesuksesan. Pengakuan adalah motivasi terkuat. Bahkan kritik dapat membangun rasa percaya diri saat 'disisipkan' di antara pujian.",
    author: "May Kay Ash"
  },
  {
    text: "Pengusaha itu bukan orang yang pintar tetapi mereka pintar mencari orang pintar.",
    author: "Guest 2138135"
  },
  {
    text: "Seseorang yang mencintaimu takkan kehabisan alasan untuk mempertahankanmu dan takkan mencari alasan untuk melepaskanmu.",
    author: "Guest 8930747"
  },
  {
    text: "Beberapa anak beruntung karena dibesarkan dari keluarga yang utuh, sisanya lebih beruntung karena diberi hati dan tulang yang kuat untuk berusaha sendiri.",
    author: "Broken Home Ep#1"
  },
  {
    text: "Ketika kamu ingin menyerah, ingatlah seberapa lama kamu berjuang, bertahan, dan melewati segalanya.",
    author: "Broken Home Ep#2"
  },
  {
    text: "Kadang keceriaan itu kita dapat di luar rumah. Bukan di tengah keluarga yang hanya mementingkan dirinya masing-masing.",
    author: "Broken Home Ep#3"
  },
  {
    text: "Ketika teman-teman menceritakan tentang indahnya keluarga. Aku menceritakan bagaimana tegarku hidup dengan keluarga yang tak utuh.",
    author: "Broken Home Ep#4"
  },

];



const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteButton = document.getElementById("new-quote");

newQuoteButton.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex].text;
  quoteAuthor.textContent = "- " + quotes[randomIndex].author;
});


document.getElementById("capture-button").addEventListener("click", function() {

  var quote = document.querySelector(".quote");
  var captureButton = document.querySelector("#capture-button");
  var newQuoteButton = document.querySelector("#new-quote");


  var quoteWrapper = document.createElement("div");
  quoteWrapper.appendChild(quote.parentNode.replaceChild(quoteWrapper, quote));
  quoteWrapper.appendChild(quote);
  quoteWrapper.style.backgroundColor = "#aac7e5";
  quoteWrapper.style.padding = "20px";
  quote.style.fontSize = "35px";
  quote.style.margin = "0";


  captureButton.style.display = "none";
  newQuoteButton.style.display = "none";


  quote.style.fontSize = "35px";


  quote.style.backgroundColor = "#F5F8FA";
  quote.style.padding = "20px";
  quote.style.borderRadius = "20px";


  html2canvas(quoteWrapper, { scale: 2 }).then(function(canvas) {
    var a = document.createElement('a');
    a.download = 'my_quote.png';
    a.href = canvas.toDataURL();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });


  setTimeout(function() {
    captureButton.style.display = "block";
    newQuoteButton.style.display = "block";
    captureButton.style.margin = "0 auto";
    newQuoteButton.style.margin = "0 auto";
    newQuoteButton.style.marginTop = "20px"
    captureButton.style.marginTop = "15px";
    quoteWrapper.parentNode.replaceChild(quote, quoteWrapper);
    quote.style.fontSize = "";
    quote.style.backgroundColor = "";
    quote.style.padding = "";
    quote.style.borderRadius = "20px";
    quote.style.margin = "";
  }, 2000);
});



function showTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const time = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  document.getElementById("clock").textContent = time;
}


setInterval(showTime, 1000);

