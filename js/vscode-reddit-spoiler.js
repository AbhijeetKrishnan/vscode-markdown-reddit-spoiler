let boxes = document.getElementsByClassName("spoilerControl");
let labels = document.getElementsByClassName("spoiler");
for (let i = 0; i < boxes.length; i++) {
	boxes[i].id = `cb_${i}`;
    labels[i].htmlFor = `cb_${i}`;
}