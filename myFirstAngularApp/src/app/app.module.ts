 
import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { AppComponent } from './app.component'; 
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';
import { TaskComponent } from './task/task.component';
import { NoteComponent } from './note/note.component';
import { NoteListComponent } from './note/note-list/note-list.component';





@NgModule({ 
	declarations: [ 
		AppComponent, 
		TaskComponent, 
		NoteComponent, 
		NoteListComponent
	], 
	imports: [
		BrowserModule,
		FormsModule, // <-- Include module in our AppModules
		HttpModule // <-- Include module in our AppModules
	], 
	providers: [], 
	bootstrap: [AppComponent] 
}) 
export class AppModule { }
