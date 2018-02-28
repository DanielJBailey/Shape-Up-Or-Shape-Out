const MaxValue = 601;//max width for canvas
let canvas = document.getElementById('art-board');//div for canvas
let stats = document.getElementById('stats');//div for stats container
let shape_name = document.getElementById('shape-stat');//div for shape name stat
let shape_width = document.getElementById('width-stat');//div for width stat
let shape_height = document.getElementById('height-stat');//div for height stat
let shape_radius = document.getElementById('radius-stat');//div for radius stat
let perimeter = document.getElementById('perimeter-stat');//div for perimeter stat
let area = document.getElementById('area-stat');//div for area stat

//function to generate random position
function random_position(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}


//create class shape
class shape {
    constructor(width, height) {
        
        this.height = height;
        this.width = width;
        this.div = document.createElement('div');
        this.div.classList.add("shape");
        canvas.appendChild(this.div);
    }

    //start describe method
    describe(name, height, width) {
        shape_name.innerHTML = this.name;
        shape_width.innerHTML = this.width;
        shape_height.innerHTML = this.height;
    }
    //random position method
    position() {
        let x = random_position(this.width, MaxValue);
        let y = random_position(this.height, MaxValue);    
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`; 
    }

}//end shape class

//begin class rectangle//////////////////////////////
class rectangle extends shape {
    constructor(width, height) {
        super(width, height);
        this.name = 'Rectangle';
        this.div.classList.add(this.name);
        this.div.style.height = `${height}px`;
        this.div.style.width = `${width}px`;
        this.position();

        this.div.addEventListener('click', () => {
            this.describe(this.name, this.height, this.width);
            perimeter.innerHTML = `${(height * 2) + (width * 2)}`;
            area.innerHTML = `${(height * width)}`;
            shape_radius.innerHTML = "NA";
        });

        this.div.addEventListener('dblclick', () => {
            perimeter.innerHTML = "";
            area.innerHTML = "";
            shape_radius.innerHTML = "";
            shape_name.innerHTML = "";
            shape_width.innerHTML = "";
            shape_height.innerHTML = "";
            this.div.remove();
        });
    }
}

//beging class square//////////////////////////////
class square extends shape {
    constructor(sideLength) {
        super(sideLength, sideLength);
        this.name = 'Square';
        this.div.classList.add(this.name);
        this.div.style.height = `${sideLength}px`;
        this.div.style.width = `${sideLength}px`;
        this.position();
        
        this.div.addEventListener('click', () => {
            this.describe(this.name, this.sideLength, this.sideLength);
            perimeter.innerHTML = `${(sideLength * 4)}`;
            area.innerHTML = `${(sideLength * sideLength)}`;
            shape_radius.innerHTML = "NA";
        });

        this.div.addEventListener('dblclick', () => {
            this.div.remove();
            perimeter.innerHTML = "";
            area.innerHTML = "";
            shape_radius.innerHTML = "";
            shape_name.innerHTML = "";
            shape_width.innerHTML = "";
            shape_height.innerHTML = "";
        });
    }
}

//begin class circle//////////////////////////////
class circle extends shape {
    constructor(radius) {
        super(radius, radius);
        this.name = 'Circle';
        this.div.classList.add(this.name);
        this.div.style.height = `${radius}px`;
        this.div.style.width = `${radius}px`;
        this.position();

        this.div.addEventListener('click', () => {
            this.describe(this.name, this.radius, this.radius);
            shape_width.innerHTML = `${(radius * 2)}`;
            shape_height.innerHTML = `${(radius)}`;
            area.innerHTML = `${(radius * radius) * Math.PI}`;
            perimeter.innerHTML = `${(2 * Math.PI * radius)}`;
            shape_radius.innerHTML = `${radius}`;
        });

        this.div.addEventListener('dblclick', () => {
            this.div.remove();
            perimeter.innerHTML = "";
            area.innerHTML = "";
            shape_radius.innerHTML = "";
            shape_name.innerHTML = "";
            shape_width.innerHTML = "";
            shape_height.innerHTML = "";
        });
    }
}

//begin class triangle//////////////////////////////
class triangle extends shape {
    constructor(height) {
        super(height, height);
        this.name = 'Triangle';
        this.div.classList.add(this.name);
        this.div.style.borderBottom = `${height}px solid #fdcb6e`;
        this.div.style.borderRight = `${height}px solid transparent`;
        this.position();

        this.div.addEventListener('click', () => {
            this.describe(this.name, this.height, this.height);
            area.innerHTML = `${0.5 * height * height}`;
            perimeter.innerHTML = `${2 * height + Math.sqrt(2) * height}`;
            shape_radius.innerHTML = 'NA';
        });

        this.div.addEventListener('dblclick', () => {
            this.div.remove();
            perimeter.innerHTML = "";
            area.innerHTML = "";
            shape_radius.innerHTML = "";
            shape_name.innerHTML = "";
            shape_width.innerHTML = "";
            shape_height.innerHTML = "";
        });

    }
}




//click listener for the button rectangle submission
let button_rectangle = document.getElementById('rec-ins');
button_rectangle.addEventListener('click', () => {
    let rect_width = document.getElementById('r-width').value;
    console.log(rect_width);
    let rect_height = document.getElementById('r-height').value;
    console.log(rect_height);

    if (rect_width >= 601 || rect_height >= 601) { //test for numbers greater than 600 returns error alert
        alert('Please use numbers less than 600!');
    }   else if (rect_width <= 0 || rect_height <= 0) { //test for numbers less than 600 returns error alert
        alert('Please use numbers greater than 0!');
    }   else if (isNaN(rect_width) || isNaN(rect_height)) { //test for non number submissions returns error alert
        alert('Please only use numbers!');
    }   else {
        let new_rect = new rectangle(rect_width, rect_height); //if nothing fails, pushes to object
    }
});

//click listener for the square button submission
let button_square = document.getElementById('sq-ins');
button_square.addEventListener('click', () => {

    let s_length = document.getElementById('s-length').value;
    console.log(s_length);

    if (s_length >= 601) { //test for numbers greater than 600 returns error alert
        alert('Please use numbers less than 600!');
    }   else if (s_length <= 0) { //test for numbers less than 600 returns error alert
        alert('Please use numbers greater than 0!');
    }   else if (isNaN(s_length)) { //test for non number submissions returns error alert
        alert('Please only use numbers!');
    }   else {
        let new_sq = new square(s_length); //if nothing fails, pushes to object
    }

});

let button_circle = document.getElementById('cir-ins');
button_circle.addEventListener('click', () => {

    let circle_radius = document.getElementById('c-radius').value;
    console.log(circle_radius);

    if (circle_radius >= 601) { //test for numbers greater than 600 returns error alert
        alert('Please use numbers less than 600!');
    }   else if (circle_radius <= 0) { //test for numbers less than 600 returns error alert
        alert('Please use numbers greater than 0!');
    }   else if (isNaN(circle_radius)) { //test for non number submissions returns error alert
        alert('Please only use numbers!');
    }   else {
        let new_sq = new circle(circle_radius); //if nothing fails, pushes to object
    }

});

let button_triangle = document.getElementById('tri-ins');
button_triangle.addEventListener('click', () => {

    let tri_height = document.getElementById('t-height').value;
    console.log(tri_height);

    if (tri_height >= 601) { //test for numbers greater than 600 returns error alert
        alert('Please use numbers less than 600!');
    }   else if (tri_height <= 0) { //test for numbers less than 600 returns error alert
        alert('Please use numbers greater than 0!');
    }   else if (isNaN(tri_height)) { //test for non number submissions returns error alert
        alert('Please only use numbers!');
    }   else {
        let new_sq = new triangle(tri_height); //if nothing fails, pushes to object
    }

});