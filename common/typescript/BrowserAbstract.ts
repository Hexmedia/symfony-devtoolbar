/// <reference path='BrowserInterface.ts' />

abstract class BrowserAbstract implements BrowserInterface {
    getProfilerUrl() : string {
        return "/_profiler/";
    }


}