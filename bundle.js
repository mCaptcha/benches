(()=>{"use strict";var e=new Worker("bench.js"),n=[],t=document.getElementById("stats");document.getElementById("start").addEventListener("click",(function(d){return function(d){d.preventDefault(),document.getElementById("pre-bench").style.display="none",document.getElementById("bench").style.display="flex",e.onmessage=function(e){!function(e){var d=document.createElement("tr");d.className="data";var a=document.createElement("td");a.innerHTML=e.difficulty.toString();var r=document.createElement("td");r.innerHTML=e.time.toString(),d.appendChild(a),d.appendChild(r),t.appendChild(d),n.push(e)}(e.data),9==n.length&&(document.getElementById("status").innerHTML="Benchmark finished")};for(var a=1;a<=9;a++){var r=5e5*a;e.postMessage(r)}!function(){var e={threads:window.navigator.hardwareConcurrency,oscup:window.navigator.userAgent};console.log(n),console.log(e);var t=document.createElement("div"),d=document.createElement("b");d.innerText="User Agent: ";var a=document.createTextNode(""+e.oscup),r=document.createElement("b");r.innerText="Hardware concurrency: ";var c=document.createTextNode(""+e.threads);t.appendChild(d),t.appendChild(a),t.appendChild(document.createElement("br")),t.appendChild(r),t.appendChild(c),document.getElementById("device-info").appendChild(t)}()}(d)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJtQkFZQSxJQUNNQSxFQUFTLElBQUlDLE9BQU8sWUFDcEJDLEVBQW1CLEdBQ25CQyxFQUFRQyxTQUFTQyxlQUFlLFNBd0V0Q0QsU0FBU0MsZUFBZSxTQUFTQyxpQkFBaUIsU0FBUyxTQUFBQyxHQUFLLE9BdEJwRCxTQUFDQSxHQUNYQSxFQUFFQyxpQkFDRkosU0FBU0MsZUFBZSxhQUFhSSxNQUFNQyxRQUFVLE9BQ3JETixTQUFTQyxlQUFlLFNBQVNJLE1BQU1DLFFBQVUsT0FHakRWLEVBQU9XLFVBQVksU0FBQ0MsSUF0REosU0FBQ0MsR0FDakIsSUFBTUMsRUFBTVYsU0FBU1csY0FBYyxNQUNuQ0QsRUFBSUUsVUFBWSxPQUNoQixJQUFNQyxFQUFPYixTQUFTVyxjQUFjLE1BQ3BDRSxFQUFLQyxVQUFZTCxFQUFLTSxXQUFXQyxXQUNqQyxJQUFNQyxFQUFXakIsU0FBU1csY0FBYyxNQUN4Q00sRUFBU0gsVUFBWUwsRUFBS1MsS0FBS0YsV0FFL0JOLEVBQUlTLFlBQVlOLEdBQ2hCSCxFQUFJUyxZQUFZRixHQUVoQmxCLEVBQU1vQixZQUFZVCxHQUVsQlosRUFBSXNCLEtBQUtYLEdBMkNQWSxDQURpQmIsRUFBTWMsTUFGTixHQUlieEIsRUFBSXlCLFNBYkF2QixTQUFTQyxlQUFlLFVBQ2hDYSxVQUFZLHVCQWlCZCxJQUFLLElBQUlVLEVBQUksRUFBR0EsR0FURyxFQVNjQSxJQUFLLENBQ3BDLElBQUlDLEVBcEVPLElBb0VhRCxFQUN4QjVCLEVBQU84QixZQUFZRCxJQWhERCxXQUNwQixJQUFNRSxFQUFPLENBQ1hDLFFBQVNDLE9BQU9DLFVBQVVDLG9CQUMxQkMsTUFBT0gsT0FBT0MsVUFBVUcsV0FHMUJDLFFBQVFDLElBQUlyQyxHQUNab0MsUUFBUUMsSUFBSVIsR0FFWixJQUFNUyxFQUFVcEMsU0FBU1csY0FBYyxPQUNqQzBCLEVBQUtyQyxTQUFTVyxjQUFjLEtBQ2xDMEIsRUFBR0MsVUFBWSxlQUNmLElBQU1DLEVBQUt2QyxTQUFTd0MsZUFBZSxHQUFHYixFQUFLSyxPQUVyQ0osRUFBVTVCLFNBQVNXLGNBQWMsS0FDdkNpQixFQUFRVSxVQUFZLHlCQUNwQixJQUFNRyxFQUFjekMsU0FBU3dDLGVBQWUsR0FBR2IsRUFBS0MsU0FFcERRLEVBQVFqQixZQUFZa0IsR0FDcEJELEVBQVFqQixZQUFZb0IsR0FDcEJILEVBQVFqQixZQUFZbkIsU0FBU1csY0FBYyxPQUMzQ3lCLEVBQVFqQixZQUFZUyxHQUNwQlEsRUFBUWpCLFlBQVlzQixHQUVwQnpDLFNBQVNDLGVBQWUsZUFBZWtCLFlBQVlpQixHQTJCbkRNLEdBRzhEQyxDQUFJeEMsTyIsInNvdXJjZXMiOlsid2VicGFjazovL2JlbmNoZXMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIG1DYXB0Y2hhIGlzIGEgUG9XIGJhc2VkIERvUyBwcm90ZWN0aW9uIHNvZnR3YXJlLlxuICogVGhpcyBpcyB0aGUgZnJvbnRlbmQgd2ViIGNvbXBvbmVudCBvZiB0aGUgbUNhcHRjaGEgc3lzdGVtXG4gKiBDb3B5cmlnaHQgwqkgMjAyMSBBcmF2aW50aCBNYW5pdm5hbmFuIDxyZWFsYXJhdmludGhAYmF0c2Vuc2UubmV0Pi5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBBcGFjaGUgMi4wIG9yIE1JVCBsaWNlbnNlLlxuICogWW91IHNob3VkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIE1JVCBhbmQgQXBhY2hlIDIuMCBhbG9uZyB3aXRoXG4gKiB0aGlzIHByb2dyYW0uIElmIG5vdCwgc2VlIDxodHRwczovL3NwZHgub3JnL2xpY2Vuc2VzL01JVC5odG1sPiBmb3JcbiAqIE1JVCBvciA8aHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wPiBmb3IgQXBhY2hlLlxuICovXG5pbXBvcnQge1BlcmZ9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBGQUNUT1IgPSA1MDAwMDA7XG5jb25zdCB3b3JrZXIgPSBuZXcgV29ya2VyKCdiZW5jaC5qcycpO1xuY29uc3QgcmVzOiBBcnJheTxQZXJmPiA9IFtdO1xuY29uc3Qgc3RhdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHMnKTtcblxuY29uc3QgYWRkUmVzdWx0ID0gKHBlcmY6IFBlcmYpID0+IHtcbiAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgcm93LmNsYXNzTmFtZSA9ICdkYXRhJztcbiAgY29uc3QgZGlmZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGRpZmYuaW5uZXJIVE1MID0gcGVyZi5kaWZmaWN1bHR5LnRvU3RyaW5nKCk7XG4gIGNvbnN0IGR1cmF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgZHVyYXRpb24uaW5uZXJIVE1MID0gcGVyZi50aW1lLnRvU3RyaW5nKCk7XG5cbiAgcm93LmFwcGVuZENoaWxkKGRpZmYpO1xuICByb3cuYXBwZW5kQ2hpbGQoZHVyYXRpb24pO1xuXG4gIHN0YXRzLmFwcGVuZENoaWxkKHJvdyk7XG5cbiAgcmVzLnB1c2gocGVyZik7XG59O1xuXG5jb25zdCBhZGREZXZpY2VJbmZvID0gKCkgPT4ge1xuICBjb25zdCBJTkZPID0ge1xuICAgIHRocmVhZHM6IHdpbmRvdy5uYXZpZ2F0b3IuaGFyZHdhcmVDb25jdXJyZW5jeSxcbiAgICBvc2N1cDogd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQsXG4gIH07XG5cbiAgY29uc29sZS5sb2cocmVzKTtcbiAgY29uc29sZS5sb2coSU5GTyk7XG5cbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB1YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2InKTtcbiAgdWEuaW5uZXJUZXh0ID0gJ1VzZXIgQWdlbnQ6ICc7XG4gIGNvbnN0IG9zID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7SU5GTy5vc2N1cH1gKTtcblxuICBjb25zdCB0aHJlYWRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYicpO1xuICB0aHJlYWRzLmlubmVyVGV4dCA9ICdIYXJkd2FyZSBjb25jdXJyZW5jeTogJztcbiAgY29uc3QgdGhyZWFkc1RleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHtJTkZPLnRocmVhZHN9YCk7XG5cbiAgZWxlbWVudC5hcHBlbmRDaGlsZCh1YSk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQob3MpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKHRocmVhZHMpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKHRocmVhZHNUZXh0KTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV2aWNlLWluZm8nKS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbn07XG5cbmNvbnN0IGZpbmlzaGVkID0gKCkgPT4ge1xuICBjb25zdCBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1cycpO1xuICBzLmlubmVySFRNTCA9ICdCZW5jaG1hcmsgZmluaXNoZWQnO1xufTtcblxuY29uc3QgcnVuID0gKGU6IEV2ZW50KSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZS1iZW5jaCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZW5jaCcpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cbiAgY29uc3QgaXRlcmF0aW9ucyA9IDk7XG4gIHdvcmtlci5vbm1lc3NhZ2UgPSAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgIGxldCBkYXRhOiBQZXJmID0gZXZlbnQuZGF0YTtcbiAgICBhZGRSZXN1bHQoZGF0YSk7XG4gICAgaWYgKHJlcy5sZW5ndGggPT0gaXRlcmF0aW9ucykge1xuICAgICAgZmluaXNoZWQoKTtcbiAgICB9XG4gIH07XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gaXRlcmF0aW9uczsgaSsrKSB7XG4gICAgbGV0IGRpZmZpY3VsdHlfZmFjdG9yID0gaSAqIEZBQ1RPUjtcbiAgICB3b3JrZXIucG9zdE1lc3NhZ2UoZGlmZmljdWx0eV9mYWN0b3IpO1xuICB9XG5cbiAgYWRkRGV2aWNlSW5mbygpO1xufTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHJ1bihlKSk7XG4iXSwibmFtZXMiOlsid29ya2VyIiwiV29ya2VyIiwicmVzIiwic3RhdHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0eWxlIiwiZGlzcGxheSIsIm9ubWVzc2FnZSIsImV2ZW50IiwicGVyZiIsInJvdyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJkaWZmIiwiaW5uZXJIVE1MIiwiZGlmZmljdWx0eSIsInRvU3RyaW5nIiwiZHVyYXRpb24iLCJ0aW1lIiwiYXBwZW5kQ2hpbGQiLCJwdXNoIiwiYWRkUmVzdWx0IiwiZGF0YSIsImxlbmd0aCIsImkiLCJkaWZmaWN1bHR5X2ZhY3RvciIsInBvc3RNZXNzYWdlIiwiSU5GTyIsInRocmVhZHMiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJoYXJkd2FyZUNvbmN1cnJlbmN5Iiwib3NjdXAiLCJ1c2VyQWdlbnQiLCJjb25zb2xlIiwibG9nIiwiZWxlbWVudCIsInVhIiwiaW5uZXJUZXh0Iiwib3MiLCJjcmVhdGVUZXh0Tm9kZSIsInRocmVhZHNUZXh0IiwiYWRkRGV2aWNlSW5mbyIsInJ1biJdLCJzb3VyY2VSb290IjoiIn0=