import { LocalStorageService } from './local-storage.service';
import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appRole]'
})
export class RoleDirective {
  private userProfiles: Array<string> = this.localStorageService.getCurrentRoles()

  @Input('appRole') profiles: Array<string>
  constructor(private localStorageService: LocalStorageService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef, ) { }

  ngOnInit() {
    this.handleDisplay()
  }

  private handleDisplay() {
    const displayElementFor = this.profiles
    const included = displayElementFor.some(profile =>
      this.userProfiles.includes(profile))
    included ? this.display() : this.hide()
  }

  private display() {
    this.viewContainer.createEmbeddedView(this.templateRef)
  }

  private hide() {
    this.viewContainer.clear()
  }
}
