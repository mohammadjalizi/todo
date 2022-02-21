let $ = document
const taskInput = $.querySelector('.task')
const usersSelect = $.querySelector('.users-select')
const insertBtn = $.querySelector('.btn')

let users = [
	{name: 'علی', value: 'ali'},
	{name: 'امین', value: 'amin'},
	{name: 'محمد', value: 'mmd'},
	{name: 'بابک', value: 'babak'},
]


const setUsers = () => {
	users.forEach(user => {
		usersSelect.innerHTML += '<option value=' + user.value + '>' + user.name + '</option>'
	})
}

const addTaskToDom = () => {
	let taskValue = taskInput.value
	let userValue = usersSelect.value

	let userTasks = $.querySelector('.' + userValue + '-tasks')

	let taskParentElem = $.createElement('div')
	taskParentElem.classList.add('main-task')

	let trashIcon = $.createElement('i')
	trashIcon.className = 'fa fa-trash'
	trashIcon.addEventListener("click",(event)=>{
removeTask(event)

	})

	let taskElem = $.createElement('h4')
	taskElem.innerHTML = taskValue

	taskParentElem.append(taskElem, trashIcon)

	userTasks.appendChild(taskParentElem)

taskInput.value=""
usersSelect.value=""
}

const validateData = () => {
	let taskValue = taskInput.value
	let userValue = usersSelect.value

	if (taskValue === '' || userValue === 'none') {
		alert('لطفا تسک و کارمند را وارد کنید')
		return false
	}

	addTaskToDom()

}
const removeTask=(event)=>{
event.target.parentElement.remove()

}


window.addEventListener('load', setUsers)
insertBtn.addEventListener('click', validateData)